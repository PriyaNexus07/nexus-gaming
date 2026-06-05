/**
 * NEXUS GAME - BACKEND SERVER
 * Main game server for handling match orchestration, player management, and real-time updates
 */

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware
app.use(cors());
app.use(express.json());

// Import game systems
const GameMatchManager = require('./systems/GameMatchManager');
const PlayerManager = require('./systems/PlayerManager');
const WaveSystem = require('./systems/WaveSystem');
const EnemyAI = require('./systems/EnemyAI');
const RewardSystem = require('./systems/RewardSystem');

// Initialize managers
const matchManager = new GameMatchManager();
const playerManager = new PlayerManager();
const waveSystem = new WaveSystem();
const enemyAI = new EnemyAI();
const rewardSystem = new RewardSystem();

// Configuration
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'nexus_secret_key';

// ============================================================================
// AUTHENTICATION
// ============================================================================

// Verify JWT token middleware
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// ============================================================================
// REST API ENDPOINTS
// ============================================================================

/**
 * POST /auth/login
 * Player login endpoint
 */
app.post('/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Validate player credentials (mock implementation)
    const player = await playerManager.authenticatePlayer(username, password);
    
    if (!player) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: player.playerId, username: player.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ token, player });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /players/:playerId
 * Get player profile data
 */
app.get('/players/:playerId', verifyToken, async (req, res) => {
  try {
    const player = await playerManager.getPlayerProfile(req.params.playerId);
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /players/:playerId/loadouts
 * Save player loadout
 */
app.post('/players/:playerId/loadouts', verifyToken, async (req, res) => {
  try {
    const loadout = await playerManager.saveLoadout(req.params.playerId, req.body);
    res.json(loadout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /leaderboards
 * Get global leaderboard
 */
app.get('/leaderboards', async (req, res) => {
  try {
    const leaderboard = await playerManager.getLeaderboard(req.query.limit || 100);
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /matches/:matchId
 * Get match statistics
 */
app.get('/matches/:matchId', async (req, res) => {
  try {
    const match = await matchManager.getMatchStats(req.params.matchId);
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /players/:playerId/matches
 * Get player match history
 */
app.get('/players/:playerId/matches', verifyToken, async (req, res) => {
  try {
    const matches = await playerManager.getMatchHistory(req.params.playerId, req.query.limit || 10);
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ============================================================================
// WEBSOCKET EVENTS - REAL-TIME GAME COMMUNICATION
// ============================================================================

wss.on('connection', (ws) => {
  let playerId = null;
  let matchId = null;
  let playerSession = null;

  /**
   * PLAYER_JOIN - Player joins a match
   */
  ws.on('message', async (data) => {
    try {
      const event = JSON.parse(data);

      switch (event.type) {
        case 'PLAYER_JOIN':
          await handlePlayerJoin(ws, event);
          break;

        case 'PLAYER_READY':
          await handlePlayerReady(ws, event);
          break;

        case 'MATCH_START':
          await handleMatchStart(ws, event);
          break;

        case 'WAVE_START':
          await handleWaveStart(ws, event);
          break;

        case 'ENEMY_SPAWN':
          await handleEnemySpawn(ws, event);
          break;

        case 'PLAYER_ACTION':
          await handlePlayerAction(ws, event);
          break;

        case 'ENEMY_KILLED':
          await handleEnemyKilled(ws, event);
          break;

        case 'WAVE_COMPLETE':
          await handleWaveComplete(ws, event);
          break;

        case 'MATCH_END':
          await handleMatchEnd(ws, event);
          break;

        case 'PLAYER_DISCONNECT':
          await handlePlayerDisconnect(ws, event);
          break;
      }
    } catch (error) {
      console.error('WebSocket error:', error);
      ws.send(JSON.stringify({ type: 'ERROR', error: error.message }));
    }
  });

  ws.on('close', () => {
    if (playerId) {
      broadcastToMatch(matchId, {
        type: 'PLAYER_LEFT',
        playerId,
        timestamp: Date.now(),
      });
    }
  });

  // ========================================================================
  // EVENT HANDLERS
  // ========================================================================

  async function handlePlayerJoin(ws, event) {
    playerId = event.playerId;
    matchId = event.matchId;

    // Create or get match
    const match = await matchManager.getOrCreateMatch(matchId, event.gameMode);
    
    // Add player to match
    playerSession = await matchManager.addPlayerToMatch(matchId, playerId, ws);

    ws.send(JSON.stringify({
      type: 'JOIN_CONFIRMED',
      matchId,
      playerId,
      match: match,
      timestamp: Date.now(),
    }));

    // Notify others
    broadcastToMatch(matchId, {
      type: 'PLAYER_JOINED',
      playerId,
      playerCount: match.players.length,
      timestamp: Date.now(),
    });
  }

  async function handlePlayerReady(ws, event) {
    await matchManager.setPlayerReady(matchId, playerId);

    broadcastToMatch(matchId, {
      type: 'PLAYER_READY',
      playerId,
      readyCount: matchManager.getReadyPlayerCount(matchId),
      timestamp: Date.now(),
    });
  }

  async function handleMatchStart(ws, event) {
    const match = await matchManager.startMatch(matchId);

    broadcastToMatch(matchId, {
      type: 'MATCH_STARTED',
      match,
      timestamp: Date.now(),
    });
  }

  async function handleWaveStart(ws, event) {
    const waveNumber = event.waveNumber;
    const enemies = await waveSystem.generateWave(waveNumber);

    broadcastToMatch(matchId, {
      type: 'WAVE_STARTED',
      waveNumber,
      enemies: enemies.map((e) => ({
        id: e.id,
        type: e.type,
        position: e.position,
        health: e.health,
      })),
      timestamp: Date.now(),
    });
  }

  async function handleEnemySpawn(ws, event) {
    const enemy = await enemyAI.spawnEnemy(event.enemyType, event.position);

    broadcastToMatch(matchId, {
      type: 'ENEMY_SPAWNED',
      enemy: {
        id: enemy.id,
        type: enemy.type,
        position: enemy.position,
        health: enemy.health,
        targetPlayerId: enemy.targetPlayerId,
      },
      timestamp: Date.now(),
    });
  }

  async function handlePlayerAction(ws, event) {
    const { actionType, weaponId, targetId, position } = event;

    if (actionType === 'FIRE') {
      const hitResult = await enemyAI.calculateHit(
        playerId,
        weaponId,
        targetId,
        position
      );

      broadcastToMatch(matchId, {
        type: 'SHOT_FIRED',
        playerId,
        weaponId,
        targetId,
        hit: hitResult.hit,
        damage: hitResult.damage,
        timestamp: Date.now(),
      });
    }

    if (actionType === 'MOVE') {
      broadcastToMatch(matchId, {
        type: 'PLAYER_MOVED',
        playerId,
        position,
        timestamp: Date.now(),
      });
    }

    if (actionType === 'USE_EQUIPMENT') {
      const result = await playerManager.useEquipment(playerId, event.equipmentId);

      broadcastToMatch(matchId, {
        type: 'EQUIPMENT_USED',
        playerId,
        equipmentId: event.equipmentId,
        effect: result.effect,
        timestamp: Date.now(),
      });
    }
  }

  async function handleEnemyKilled(ws, event) {
    const { enemyId, killedByPlayerId, weaponUsed } = event;

    // Update enemy status
    await matchManager.markEnemyAsKilled(matchId, enemyId);

    // Award points and rewards
    const rewards = await rewardSystem.calculateKillRewards(
      killedByPlayerId,
      event.enemyType,
      weaponUsed
    );

    await playerManager.addRewards(killedByPlayerId, rewards);

    broadcastToMatch(matchId, {
      type: 'ENEMY_KILLED',
      enemyId,
      killedByPlayerId,
      rewards,
      timestamp: Date.now(),
    });
  }

  async function handleWaveComplete(ws, event) {
    const { waveNumber } = event;

    const waveRewards = await rewardSystem.calculateWaveRewards(waveNumber);
    await playerManager.addRewards(playerId, waveRewards);

    const nextWaveNumber = waveNumber + 1;

    broadcastToMatch(matchId, {
      type: 'WAVE_COMPLETED',
      waveNumber,
      waveRewards,
      nextWave: nextWaveNumber,
      timestamp: Date.now(),
    });
  }

  async function handleMatchEnd(ws, event) {
    const { reason, winnerPlayerId } = event;

    // Calculate final rewards
    const matchStats = await matchManager.getMatchStats(matchId);
    const finalRewards = await rewardSystem.calculateMatchRewards(matchStats);

    // Award to all players
    for (const pid of matchStats.playerIds) {
      await playerManager.addRewards(pid, finalRewards);
    }

    // End match
    const endedMatch = await matchManager.endMatch(matchId);

    broadcastToMatch(matchId, {
      type: 'MATCH_ENDED',
      reason,
      winner: winnerPlayerId,
      matchStats: endedMatch,
      finalRewards,
      timestamp: Date.now(),
    });
  }

  async function handlePlayerDisconnect(ws, event) {
    await matchManager.removePlayerFromMatch(matchId, playerId);

    broadcastToMatch(matchId, {
      type: 'PLAYER_DISCONNECTED',
      playerId,
      timestamp: Date.now(),
    });
  }
});

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Broadcast message to all clients in a match
 */
function broadcastToMatch(matchId, message) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

/**
 * Health check endpoint
 */
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: Date.now(),
    activeMatches: matchManager.getActiveMatchCount(),
    connectedPlayers: matchManager.getTotalConnectedPlayers(),
  });
});

// ============================================================================
// SERVER INITIALIZATION
// ============================================================================

server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════╗
║     NEXUS GAME SERVER - RUNNING                ║
║     ═══════════════════════════════════════    ║
║  🎮 Port: ${PORT}                              ║
║  🔌 WebSocket: Active                          ║
║  📊 Game Modes: Survival, Raid, Ranked         ║
║  👥 Max Players: Unlimited (Scalable)          ║
╚════════════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  wss.clients.forEach((client) => {
    client.close();
  });
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

module.exports = { app, server, wss };