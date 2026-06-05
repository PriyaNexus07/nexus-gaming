/**
 * GAME MATCH MANAGER
 * Handles match creation, player management, and match state
 */

class GameMatchManager {
  constructor() {
    this.matches = new Map();
    this.matchIdCounter = 0;
  }

  /**
   * Get or create a match
   */
  async getOrCreateMatch(matchId, gameMode = 'survival') {
    if (!this.matches.has(matchId)) {
      const match = {
        id: matchId,
        gameMode, // 'survival', 'raid', 'ranked'
        status: 'lobby', // 'lobby', 'countdown', 'active', 'ended'
        createdAt: Date.now(),
        startedAt: null,
        endedAt: null,
        players: [],
        currentWave: 0,
        enemies: [],
        map: this.generateMap(),
        settings: {
          maxPlayers: gameMode === 'raid' ? 4 : 1,
          timeLimit: 300000, // 5 minutes
          initialDifficulty: 1,
        },
      };
      this.matches.set(matchId, match);
    }
    return this.matches.get(matchId);
  }

  /**
   * Add player to match
   */
  async addPlayerToMatch(matchId, playerId, websocket) {
    const match = this.matches.get(matchId);
    if (!match) throw new Error('Match not found');

    const player = {
      id: playerId,
      joinedAt: Date.now(),
      isReady: false,
      websocket,
      stats: {
        kills: 0,
        deaths: 0,
        damageDealt: 0,
        damageTaken: 0,
        score: 0,
      },
      health: 100,
      position: { x: 0, y: 0, z: 0 },
      currentWeapon: 'AR-101',
      currentLoadout: {},
    };

    match.players.push(player);
    return player;
  }

  /**
   * Remove player from match
   */
  async removePlayerFromMatch(matchId, playerId) {
    const match = this.matches.get(matchId);
    if (!match) return;

    match.players = match.players.filter((p) => p.id !== playerId);

    // End match if no players left
    if (match.players.length === 0) {
      await this.endMatch(matchId);
    }
  }

  /**
   * Set player ready status
   */
  async setPlayerReady(matchId, playerId) {
    const match = this.matches.get(matchId);
    const player = match.players.find((p) => p.id === playerId);

    if (player) {
      player.isReady = true;
    }

    // Check if all players ready
    const allReady = match.players.every((p) => p.isReady);
    if (allReady && match.players.length >= 1) {
      return true; // Ready to start
    }
    return false;
  }

  /**
   * Get count of ready players
   */
  getReadyPlayerCount(matchId) {
    const match = this.matches.get(matchId);
    return match.players.filter((p) => p.isReady).length;
  }

  /**
   * Start the match
   */
  async startMatch(matchId) {
    const match = this.matches.get(matchId);
    if (!match) throw new Error('Match not found');

    match.status = 'active';
    match.startedAt = Date.now();
    match.currentWave = 1;

    return match;
  }

  /**
   * Update player position
   */
  async updatePlayerPosition(matchId, playerId, position) {
    const match = this.matches.get(matchId);
    const player = match.players.find((p) => p.id === playerId);

    if (player) {
      player.position = position;
    }
  }

  /**
   * Update player health
   */
  async updatePlayerHealth(matchId, playerId, healthChange) {
    const match = this.matches.get(matchId);
    const player = match.players.find((p) => p.id === playerId);

    if (player) {
      player.health = Math.max(0, Math.min(100, player.health + healthChange));

      if (player.health <= 0) {
        player.stats.deaths++;
        return { alive: false };
      }
    }

    return { alive: player.health > 0 };
  }

  /**
   * Mark enemy as killed
   */
  async markEnemyAsKilled(matchId, enemyId) {
    const match = this.matches.get(matchId);
    match.enemies = match.enemies.filter((e) => e.id !== enemyId);
  }

  /**
   * End the match
   */
  async endMatch(matchId) {
    const match = this.matches.get(matchId);
    if (!match) throw new Error('Match not found');

    match.status = 'ended';
    match.endedAt = Date.now();

    const duration = match.endedAt - match.startedAt;

    return {
      ...match,
      duration,
      playerStats: match.players.map((p) => ({
        playerId: p.id,
        ...p.stats,
      })),
    };
  }

  /**
   * Get match statistics
   */
  async getMatchStats(matchId) {
    const match = this.matches.get(matchId);
    if (!match) throw new Error('Match not found');

    return {
      matchId: match.id,
      gameMode: match.gameMode,
      status: match.status,
      duration: match.endedAt ? match.endedAt - match.startedAt : 0,
      wavesCompleted: match.currentWave - 1,
      playerCount: match.players.length,
      playerIds: match.players.map((p) => p.id),
      players: match.players.map((p) => ({
        playerId: p.id,
        kills: p.stats.kills,
        deaths: p.stats.deaths,
        damageDealt: p.stats.damageDealt,
        damageTaken: p.stats.damageTaken,
        score: p.stats.score,
      })),
    };
  }

  /**
   * Generate random map layout
   */
  generateMap() {
    return {
      id: `map_${Math.random().toString(36).substr(2, 9)}`,
      name: 'Arena Alpha',
      size: { width: 150, height: 150 },
      spawnPoints: [
        { x: 75, y: 75, z: 0 },
        { x: 50, y: 50, z: 0 },
        { x: 100, y: 100, z: 0 },
        { x: 25, y: 125, z: 0 },
      ],
      hazards: [
        { type: 'radiation', position: { x: 30, y: 30 }, radius: 20 },
        { type: 'fire', position: { x: 120, y: 120 }, radius: 15 },
      ],
      cover: [
        { position: { x: 50, y: 75 }, size: { w: 10, h: 10 } },
        { position: { x: 100, y: 50 }, size: { w: 15, h: 8 } },
      ],
    };
  }

  /**
   * Get active match count
   */
  getActiveMatchCount() {
    return Array.from(this.matches.values()).filter((m) => m.status === 'active').length;
  }

  /**
   * Get total connected players
   */
  getTotalConnectedPlayers() {
    return Array.from(this.matches.values()).reduce((sum, m) => sum + m.players.length, 0);
  }
}

module.exports = GameMatchManager;