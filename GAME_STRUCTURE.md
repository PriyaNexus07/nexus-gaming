# NEXUS GAME - COMPLETE GAME STRUCTURE

## 🎮 GAME OVERVIEW

**Game Title:** NEXUS
**Genre:** Mobile Tactical Shooter (PvE/PvP)
**Platform:** iOS/Android
**Target Audience:** Competitive gamers, 13+
**Core Loop:** Survive waves, upgrade loadout, climb leaderboard

---

## 🏗️ GAME ARCHITECTURE STRUCTURE

```
NEXUS GAME ARCHITECTURE
│
├── 1. CORE GAME MODES
├── 2. PROGRESSION SYSTEMS
├── 3. CONTENT STRUCTURE
├── 4. PLAYER DATA MODEL
├── 5. GAME ECONOMY
├── 6. UI/UX FLOW
├── 7. LEVEL DESIGN
├── 8. TECHNICAL STACK
└── 9. MONETIZATION
```

---

## 1️⃣ CORE GAME MODES

### A. SURVIVAL MODE (Primary)
```
SURVIVAL MATCH
├── Wave-Based Combat
│   ├── Wave 1-5: Difficulty 1 (8 enemies)
│   ├── Wave 6-10: Difficulty 2 (12 enemies)
│   ├── Wave 11-15: Difficulty 3 (16 enemies)
│   ├── Wave 16+: Endless (scaling)
│   └── Boss Wave (every 5 waves)
│
├── Victory Conditions
│   ├── Survive 10 waves → Rank S (5000 points)
│   ├── Survive 15 waves → Rank S+ (8000 points)
│   ├── Endless mode → Compete for leaderboard
│   └── Speed run → Fastest time to wave 10
│
└── Defeat Conditions
    ├── Health reaches 0
    ├── Time limit exceeded (120 seconds)
    └── All lives lost (3 lives max)
```

### B. TACTICAL RAID (PvE Campaign)
```
RAID STRUCTURE
├── Campaign Map (5 zones)
│   ├── Zone 1: Training Ground (Easy)
│   ├── Zone 2: Urban Combat (Normal)
│   ├── Zone 3: Industrial Complex (Hard)
│   ├── Zone 4: Infiltration (Nightmare)
│   └── Zone 5: Mothership (Impossible)
│
├── Mission Types Per Zone
│   ├── Elimination (Kill all enemies)
│   ├── Defense (Protect objective)
│   ├── Extraction (Reach exit point)
│   ├── Assassinate (Kill target)
│   └── Escape (Survive time limit)
│
└── Rewards
    ├── Story progression
    ├── Weapon blueprints
    ├── Character skins
    └── Battle pass XP
```

### C. COMPETITIVE PvP (Future)
```
RANKED MATCHES
├── 1v1 Duel
│   └── Best of 3 rounds
│
├── 2v2 Squad (future)
│   └── Objective-based
│
└── Battle Royale (future)
    └── Last player standing
```

---

## 📊 WEBSITE PAGE ↔ GAME SYSTEM MAPPING

```
WEBSITE                 GAME SYSTEM              GAME MECHANIC
─────────────────────────────────────────────────────────────
HOME (NEXUS)      →     Main Menu              Start/Continue/Settings
                         Lobby                  Matchmaking, Cosmetics
                         
BELT              →     Loadout Manager         Weapon Selection
                         Weapon System           Stats, Damage, Range
                         Equipment Editor        Customization
                         
AMMO              →     Inventory Manager       Resource Management
                         Economy System          Credits, Ammunition
                         Crafting               Create/Upgrade Items
                         
RADAR             →     Tactical HUD           In-Game Map
                         Minimap                Enemy Positions
                         Threat Assessment      Health, Wave Info
                         
PROJECT           →     Game Info              Stats, Achievements
                         Progression            Level, XP, Rank
                         Leaderboards           Global Rankings
```

---

## 2️⃣ PROGRESSION SYSTEMS

### A. PLAYER LEVEL PROGRESSION

```
LEVEL SYSTEM
├── Levels 1-50
│   ├── Level 1: Unlock Player (0 XP)
│   ├── Level 10: Unlock 2nd Weapon (15000 XP)
│   ├── Level 20: Unlock 3rd Weapon (50000 XP)
│   ├── Level 30: Unlock Raid Mode (150000 XP)
│   ├── Level 40: Unlock Cosmetics (300000 XP)
│   └── Level 50: Max Level (1000000 XP)
│
└── XP Sources
    ├── Kill enemy: 10-50 XP
    ├── Complete wave: 100-500 XP
    ├── Finish match: 1000-5000 XP
    ├── Daily login: 500 XP
    └── Achievements: 100-1000 XP
```

### B. WEAPON MASTERY SYSTEM

```
WEAPON LEVELS (Per Weapon)
├── Level 1-20 Progression
│   ├── Every kill: 1 mastery point
│   ├── Every level: +1% damage
│   ├── Every level: +2% accuracy
│   └── Every 5 levels: Unlock skin
│
└── Weapon Unlocks at Milestones
    ├── 100 kills: Weapon mastery badge
    ├── 500 kills: Exclusive skin
    ├── 1000 kills: Gold variant
    └── 5000 kills: Legendary skin
```

### C. RANK SYSTEM (Seasonal)

```
COMPETITIVE RANKS
├── Bronze (0-999 RP)
├── Silver (1000-1999 RP)
├── Gold (2000-2999 RP)
├── Platinum (3000-3999 RP)
├── Diamond (4000-4999 RP)
├── Master (5000+ RP)
└── Grandmaster (Top 100 players)

RP Gains/Losses
├── Win: +25 RP
├── Loss: -10 RP
├── Bonus: Streak multiplier (2x after 3 wins)
└── Penalty: -50 RP for leaving match
```

---

## 3️⃣ CONTENT STRUCTURE

### A. WEAPONS SYSTEM

```
WEAPON CATALOG (156 Variants)
│
├── ASSAULT RIFLES (25 variants)
│   ├── AR-101 "Viper" (Starter)
│   │   ├── Damage: 45
│   │   ├── Range: 85m
│   │   ├── Fire Rate: 720 RPM
│   │   ├── Magazine: 30
│   │   └── Type: Hitscan
│   │
│   ├── AR-201 "Phantom"
│   │   ├── Damage: 55
│   │   ├── Range: 95m
│   │   ├── Fire Rate: 650 RPM
│   │   ├── Magazine: 25
│   │   └── Type: Hitscan
│   │
│   └── [23 more variants with stat variations]
│
├── SNIPER RIFLES (12 variants)
│   ├── SR-501 "Sentinel"
│   │   ├── Damage: 95
│   │   ├── Range: 150m
│   │   ├── Fire Rate: 60 RPM
│   │   ├── Magazine: 5
│   │   └── Type: Hitscan
│   └── [11 more variants]
│
├── SUBMACHINE GUNS (18 variants)
│   └── High fire rate, close range
│
├── SHOTGUNS (15 variants)
│   └── High damage, ultra-close range
│
├── PISTOLS (20 variants)
│   └── Secondary weapons
│
├── SPECIAL WEAPONS (30 variants)
│   ├── Launcher
│   ├── Rail Gun
│   ├── Plasma Rifle
│   └── [27 more]
│
├── MELEE WEAPONS (20 variants)
│   └── For close quarters
│
└── EXPERIMENTAL (16 variants)
    ├── Prototype weapons
    ├── Limited time
    └── High risk/reward
```

### B. EQUIPMENT SYSTEM

```
EQUIPMENT SLOTS
│
├── Armor (Chest)
│   ├── Light Kevlar: +5% speed, 80 HP
│   ├── Combat Plate: Balanced, 100 HP
│   └── Heavy Exo: -10% speed, 150 HP
│
├── Helmet
│   ├── Standard: 20 HP
│   ├── Tactical: 35 HP + Radar
│   └── Advanced: 50 HP + Night Vision
│
├── Accessories (3 slots)
│   ├── Ammo Pouch: +30% ammo capacity
│   ├── Health Kit: Regenerate 20 HP
│   ├── Shield Generator: Reflect 25% damage
│   ├── Speed Boost: +15% movement speed
│   └── [20 more accessories]
│
├── Augmentations
│   ├── Bionic Legs: +20% jump height
│   ├── Neural Link: +10% reaction time
│   ├── Reinforced Bones: +10% damage resistance
│   └── [15 more]
│
└── Cosmetics (Non-stat)
    ├── Skins (character, weapon)
    ├── Emotes
    ├── Kill Effects
    └── Finishing Moves
```

### C. ENEMY TYPES

```
ENEMY ROSTER (24 Types)
│
├── TIER 1: Basic Enemies (Easy)
│   ├── Grunt (10 HP, 5 damage)
│   │   └── Attack: Melee swipe
│   │
│   ├── Drone (8 HP, 3 damage)
│   │   └── Attack: Laser burst
│   │
│   └── Crawler (6 HP, 2 damage)
│       └── Attack: Poison spit
│
├── TIER 2: Advanced (Normal)
│   ├── Soldier (25 HP, 12 damage)
│   │   └── Attack: Rifle burst
│   │
│   ├── Shielded Unit (40 HP, shield 20)
│   │   └── Attack: Shield bash
│   │
│   └── Sniper (15 HP, 25 damage)
│       └── Attack: Long-range shot
│
├── TIER 3: Elite (Hard)
│   ├── Commander (50 HP, calls reinforcements)
│   ├── Tank (100 HP, armor, melee)
│   └── Assassin (20 HP, cloaking, backstab)
│
├── TIER 4: Legendary (Nightmare)
│   ├── Cyborg (150 HP, multiple attacks)
│   └── Mutant (120 HP, regeneration)
│
├── BOSS ENEMIES (Every 5 waves)
│   ├── Wave 5: "Reaper" (300 HP)
│   ├── Wave 10: "Nexus Core" (500 HP)
│   ├── Wave 15: "Titan" (800 HP)
│   └── Wave 20+: Random bosses
│
└── SPECIAL ENEMIES
    ├── Spawner: Creates mini enemies
    ├── Buffed: Enhanced ally nearby
    └── Corrupted: Unpredictable AI
```

---

## 4️⃣ PLAYER DATA MODEL

### A. PLAYER PROFILE

```json
{
  "playerId": "nexus_player_12345",
  "username": "TacticalGamer",
  "level": 35,
  "experience": 285000,
  "rank": "Gold",
  "rankPoints": 2500,
  
  "stats": {
    "totalKills": 5432,
    "totalDeaths": 1245,
    "killDeathRatio": 4.36,
    "wavesCompleted": 156,
    "highestWaveSurvived": 42,
    "totalPlayTime": 4862
  },
  
  "progression": {
    "battlePassLevel": 45,
    "battlePassXP": 15000,
    "seasonalRank": "Platinum",
    "achievements": ["First Kill", "Wave 10", "Boss Defeated"]
  },
  
  "inventory": {
    "credits": 45000,
    "gems": 250,
    "weapons": ["AR-101", "SR-501", "SG-301"],
    "equipment": {
      "armor": "Combat Plate",
      "helmet": "Tactical Helmet",
      "accessories": ["Ammo Pouch", "Health Kit", "Speed Boost"]
    }
  },
  
  "cosmetics": {
    "activeSkin": "Nexus Agent",
    "weaponSkin": "Phantom Blue",
    "killEffect": "Electric",
    "playerBadges": ["Veteran", "Wave Master", "Sharpshooter"]
  },
  
  "settings": {
    "difficulty": "Hard",
    "targetingAssist": "Off",
    "vibration": "On",
    "soundVolume": 80
  }
}
```

### B. LOADOUT SYSTEM (Linked to BELT page)

```json
{
  "loadouts": [
    {
      "id": "loadout_1",
      "name": "Aggressive",
      "description": "High damage build",
      "primaryWeapon": {
        "weaponId": "AR-201",
        "attachments": ["Scope", "Suppressor", "Grip"],
        "ammoType": "5.56mm",
        "magazine": 30
      },
      "secondaryWeapon": {
        "weaponId": "P-401",
        "ammoType": "9mm",
        "magazine": 12
      },
      "equipment": {
        "armor": "Light Kevlar",
        "helmet": "Standard",
        "accessories": ["Ammo Pouch", "Speed Boost"]
      },
      "stats": {
        "totalDamage": 145,
        "range": 95,
        "fireRate": 720,
        "mobility": 95
      }
    },
    {
      "id": "loadout_2",
      "name": "Defensive",
      "description": "Tank build",
      "primaryWeapon": {},
      "equipment": {
        "armor": "Heavy Exo",
        "helmet": "Advanced",
        "accessories": ["Shield Generator", "Health Kit"]
      }
    }
  ]
}
```

### C. MATCH HISTORY

```json
{
  "matches": [
    {
      "matchId": "match_001",
      "mode": "Survival",
      "date": "2025-01-15T14:30:00Z",
      "duration": 1245,
      "result": "Victory",
      "wavesSurvived": 15,
      "kills": 145,
      "deaths": 3,
      "damageDealt": 3450,
      "damageTaken": 260,
      "pointsEarned": 3500,
      "weaponsUsed": ["AR-201", "SR-501"],
      "enemiesDefeated": {
        "Grunt": 82,
        "Soldier": 45,
        "Sniper": 12,
        "Commander": 4,
        "Boss": 1
      }
    }
  ]
}
```

---

## 5️⃣ GAME ECONOMY (Currency & Rewards)

### A. CURRENCY SYSTEM

```
DUAL CURRENCY MODEL
│
├── CREDITS (Earned in-game)
│   ├── Grind rate: 100-500 per match
│   ├── Uses:
│   │   ├── Purchase weapons
│   │   ├── Upgrade equipment
│   │   ├── Craft items
│   │   └── Cosmetics
│   │
│   └── Sources:
│       ├── Match completion: 1000 credits
│       ├── Kill bonus: 10 credits per kill
│       ├── Wave bonus: 500 per wave
│       └── Daily login: 500 credits
│
└── GEMS (Premium currency)
    ├── Prices: $0.99 - $99.99
    ├── Uses:
    │   ├── Battle Pass (1000 gems)
    │   ├── Premium skins (500-2000 gems)
    │   ├── Fast track BP (100-500 gems)
    │   └── Pass cosmetics
    │
    └── Free sources:
        ├── Battle Pass rewards: 200 gems
        ├── Achievements: 50-500 gems
        └── Events: 100-1000 gems
```

### B. BATTLE PASS SYSTEM

```
SEASONAL BATTLE PASS (60 Tiers)
│
├── FREE TRACK (30 rewards)
│   ├── Tier 10: 5000 Credits
│   ├── Tier 20: Weapon skin
│   ├── Tier 30: Character skin
│   └── Random cosmetics throughout
│
├── PREMIUM TRACK (60 rewards)
│   ├── Cost: 1000 Gems ($9.99)
│   ├── Tier 5: 1000 Gems
│   ├── Tier 15: Legendary Weapon
│   ├── Tier 30: Mythic Character Skin
│   ├── Tier 45: Emote bundle
│   └── Tier 60: Exclusive cosmetic
│
├── XP Sources
│   ├── Match completion: 100-500 XP
│   ├── Challenges: 250-1000 XP
│   ├── Achievements: 100-500 XP
│   └── Daily quests: 300 XP
│
└── Season Length: 10 weeks
    ├── 20 XP per level (6000 XP to max)
    └── ~2 matches per day for completion
```

### C. REWARD SCALING

```
MATCH REWARDS FORMULA
├── Base Reward: 1000 credits
├── Wave Multiplier: Wave Number × 50
├── Performance Bonus:
│   ├── Kill ratio: +10 credits per kill
│   ├── Accuracy: +5% bonus if > 70%
│   ├── Headshots: +50 credits each
│   └── Speedrun: +500 bonus if < 5 min
├── Battle Pass Bonus: +20% XP
└── Event Bonus: +50% (during events)

Example: Wave 10, 50 kills, 70% accuracy
└─ Base 1000 + (10×50) + (50×10) + (1000×0.05) + 250
   = Base 1000 + 500 + 500 + 50 + 250 = 2300 credits
```

---

## 6️⃣ UI/UX FLOW (Website Integration)

### A. MAIN MENU (HOME Page)

```
MAIN MENU SCREEN
├── Logo & Branding (M Tricolor stripe)
├── Quick Stats
│   ├── Level: 35
│   ├── Rank: Gold
│   └── Next Reward: 1500 XP
├── Primary Buttons
│   ├── PLAY → Match selection
│   ├── LOADOUT → BELT page
│   ├── INVENTORY → AMMO page
│   ├── STATS → PROJECT page
│   └── SETTINGS → Options
└── Secondary
    ├── Battle Pass progress
    ├── Daily challenges
    └── News/Events
```

### B. MATCH SELECTION (HOME → Play)

```
GAME MODE SELECTION
├── Survival (Recommended)
│   └── Classic wave survival
├── Tactical Raid
│   └── Campaign missions
├── Ranked (Locked until Level 10)
│   └── Competitive matches
└── Limited Time Event
    └── Special mode (weekly rotation)
```

### C. LOADOUT EDITOR (BELT Page)

```
LOADOUT CUSTOMIZATION
├── Weapon Slots
│   ├── Primary (Rifle, SMG, etc.)
│   ├── Secondary (Pistol, Shotgun)
│   └── Melee (Knife, Sword)
├── Equipment Selection
│   ├── Armor type
│   ├── Helmet
│   └── 3 Accessory slots
├── Loadout Stats (Real-time)
│   ├── Total Damage
│   ├── Range
│   ├── Fire Rate
│   └── Mobility score
├── Action Buttons
│   ├── SAVE LOADOUT
│   ├── COPY LOADOUT
│   └── DELETE
└── Loadout List (5 custom slots)
```

### D. INVENTORY (AMMO Page)

```
INVENTORY INTERFACE
├── Currency Display
│   ├── 45,000 Credits
│   └── 250 Gems
├── Weapons Inventory
│   ├── Owned: 8/156
│   └── Weapon list with stats
├── Equipment Inventory
│   ├── Armor: 5 variants
│   ├── Helmets: 8 variants
│   └── Accessories: 12 variants
├── Consumables
│   ├── Health Kits: 3
│   ├── Ammo Boxes: 5
│   └── Power-ups: 2
└── Actions
    ├── Use item
    ├── Craft new
    └── Sell duplicate
```

### E. TACTICAL HUD (RADAR Page - In-Game)

```
IN-GAME HUD DISPLAY
├── Top-left: Health Bar (100/100)
├── Top-right: Ammo Counter
│   ├── Magazine: 30/30
│   ├── Reserve: 120
│   └── Current weapon: AR-201
├── Center: Crosshair with reticle
├── Bottom-left: Minimap/Radar
│   ├── Player position
│   ├── Enemy positions (dots)
│   ├── Objective marker
│   └── Grid overlay
├── Bottom-center: Wave counter
│   ├── Wave 7/20
│   ├── Enemies left: 3/12
│   └── Time remaining: 2:34
├── Bottom-right: Equipment status
│   ├── Armor condition
│   ├── Shield charge
│   └── Cooldown indicators
└── Mini-alerts (top-center)
    ├── Damage taken: -15
    ├── Enemy eliminated
    └── Achievement unlocked
```

### F. STATS & PROGRESSION (PROJECT Page)

```
STATISTICS DASHBOARD
├── Profile Header
│   ├── Avatar & username
│   ├── Level 35 / Experience bar
│   ├── Rank: Gold (2500 RP)
│   └── Time played: 4862 minutes
├── Performance Stats
│   ├── Total kills: 5432
│   ├── K/D Ratio: 4.36
│   ├── Accuracy: 67%
│   └── Headshot rate: 12%
├── Progression Tabs
│   ├── Battle Pass (45/60)
│   ├── Achievements (32/50)
│   ├── Weapon Mastery
│   └── Leaderboards (Rank: #1247)
├── Recent Matches
│   └── 10 match history with stats
└── Trending Stats
    ├── Kill streak: 45
    ├── Best game: 287 kills
    └── Current streak: 8 wins
```

---

## 7️⃣ LEVEL DESIGN STRUCTURE

### A. MAP DESIGN

```
SURVIVAL MAP (Arena-based)
├── Central Area (150m × 150m)
│   ├── Open space for combat
│   ├── 3 resource zones
│   ├── 2 elevation changes
│   └── Central objective (in later modes)
│
├── Perimeter Zones (Spawn areas)
│   ├── 4 spawn points for enemies
│   ├── 1 spawn point for player
│   └── Exit/safe zones
│
├── Cover Objects
│   ├── Destructible: Crates, walls (50 HP)
│   ├── Permanent: Pillars, buildings
│   ├── Dynamic: Platforms that move
│   └── Interactive: Doors, vents
│
└── Environmental Hazards
    ├── Radiation zones (10% damage/sec)
    ├── Acid pools (20% damage/sec)
    ├── Fire zones (15% damage/sec)
    └── Temporal anomalies (50% slow)
```

### B. RAID MAP PROGRESSION

```
CAMPAIGN ZONE 1: Training Ground
├── Difficulty: Easy
├── Size: 100m × 100m
├── Enemy variety: Grunts, Drones only
├── Story: "Welcome to NEXUS"
└── Tutorial missions embedded

ZONE 2: Urban Combat
├── Difficulty: Normal
├── Size: 150m × 200m
├── Enemy variety: Soldiers, Shielded units
├── Story: "The invasion begins"

ZONE 3: Industrial Complex
├── Difficulty: Hard
├── Size: 200m × 250m
├── Enemy variety: Elite units, Snipers
├── Story: "Headquarters under siege"

ZONE 4: Infiltration
├── Difficulty: Nightmare
├── Size: 250m × 300m
├── Enemy variety: All types + bosses
├── Story: "Enemy command center"

ZONE 5: Mothership
├── Difficulty: Impossible
├── Size: 300m × 400m
├── Enemy variety: Legendary enemies
├── Story: "Final confrontation"
```

---

## 8️⃣ TECHNICAL STACK

```
NEXUS GAME - TECHNICAL ARCHITECTURE

Frontend (Player Interface)
├── Unity Engine (Game client)
├── React/HTML (Companion app - website)
├── TextMesh Pro (UI text)
└── Photon PUN 2 (Multiplayer - future)

Backend (Server)
├── Game Server
│   ├── Wave/match orchestration
│   ├── Enemy AI simulation
│   └── Score validation
├── Authentication Server
│   ├── Login/signup
│   ├── Account recovery
│   └── Security
├── Database
│   ├── Player profiles
│   ├── Match history
│   ├── Leaderboards
│   └── Cosmetics inventory
└── API Server
    ├── REST endpoints
    ├── Real-time updates (WebSocket)
    └── Analytics tracking

Data Storage
├── Player Data (PostgreSQL)
├── Game Analytics (BigQuery)
├── Asset Cache (CDN)
└── Leaderboard Cache (Redis)

External Services
├── Analytics (Firebase/Amplitude)
├── Monetization (Unity IAP)
├── Push Notifications (Firebase)
└── Social (Steam/Xbox/PlayStation APIs)
```

---

## 9️⃣ MONETIZATION STRATEGY

### A. MONETIZATION MODELS

```
HYBRID MONETIZATION
│
├── FREE-TO-PLAY (No paywalls on gameplay)
│   ├── All game modes accessible
│   ├── All weapons obtainable with grind
│   ├── Cosmetics are optional
│   └── No pay-to-win mechanics
│
├── BATTLE PASS ($9.99/season)
│   ├── 10 weeks per season
│   ├── 200 gems returned (free premium)
│   ├── ~$50/year for power users
│   └── Cosmetics + seasonal rewards
│
├── COSMETICS ($1.99 - $19.99)
│   ├── Character skins
│   ├── Weapon skins
│   ├── Emotes & effects
│   └── No gameplay advantage
│
└── PASS COSMETICS ($4.99 - $24.99)
    ├── Limited edition
    ├── Event-locked
    └── Exclusivity premium
```

### B. MONETIZATION PROJECTIONS

```
PLAYER SEGMENTATION
├── Whales (5% of players)
│   ├── Spend: $20-100/month
│   ├── Battle pass: Yes
│   ├── Cosmetics: All limited editions
│   └── Revenue: 50% of total
│
├── Dolphins (15% of players)
│   ├── Spend: $5-20/month
│   ├── Battle pass: Yes
│   ├── Cosmetics: Occasional purchases
│   └── Revenue: 35% of total
│
└── Minnows (80% of players)
    ├── Spend: $0-5/month
    ├── Battle pass: Free track only
    ├── Cosmetics: Rarely bought
    └── Revenue: 15% of total

Example: 1M players
├── Whales (50k): $50 avg = $2.5M
├── Dolphins (150k): $12 avg = $1.8M
├── Minnows (800k): $1 avg = $0.8M
└── Total monthly revenue: ~$5.1M
```

---

## 🎯 CORE GAME LOOP (Per Match)

```
MATCH FLOW
│
├── LOBBY PHASE (30 seconds)
│   ├── Load player loadout
│   ├── Load map
│   ├── Countdown timer
│   └── Ready signal
│
├── PREPARATION PHASE (15 seconds)
│   ├── Player spawns in arena
│   ├── Enemies haven't spawned yet
│   ├── Player can move/aim
│   └── Ammo is fully loaded
│
├── COMBAT PHASE (Wave N duration)
│   ├── Wave N enemies spawn
│   ├── Player must eliminate all
│   ├── Score accumulates
│   ├── Health management
│   └── Resource management
│
├── WAVE TRANSITION (10 seconds)
│   ├── All enemies eliminated
│   ├── Automatic ammo refill
│   ├── Health regeneration starts
│   ├── Stats displayed
│   └── Next wave preview
│
├── MATCH END (When criteria met)
│   └── Victory OR Defeat
│       ├── Calculate final score
│       ├── Assign rewards
│       ├── Update progression
│       └── Save match history
│
└── RESULTS SCREEN (30 seconds)
    ├── Final score
    ├── Rewards earned
    ├── Stats summary
    ├── Comparisons (yesterday, all-time)
    └── Next match button
```

---

## 📱 WEBSITE ↔ GAME SYNC

```
COMPANION APP (WEBSITE) FUNCTIONS
│
├── HOME PAGE
│   ├── Recent match stats
│   ├── Leaderboard position
│   ├── Daily challenge tracking
│   └── "PLAY NOW" button
│
├── BELT PAGE (Loadout Manager)
│   ├── Edit loadouts remotely
│   ├── Swap gear
│   ├── Preview stats
│   ├── Sync to game on next launch
│   └── Share loadout with friends
│
├── AMMO PAGE (Inventory)
│   ├── View all owned items
│   ├── Check crafting recipes
│   ├── Market trading (future)
│   ├── Sell duplicate items
│   └── Manage inventory space
│
├── RADAR PAGE (Tactical Stats)
│   ├── Weapon statistics
│   ├── Enemy encounter data
│   ├── Map heatmaps
│   ├── Performance analytics
│   └── Accuracy breakdown
│
└── PROJECT PAGE (Progression)
    ├── Achievement browsing
    ├── Leaderboard rankings
    ├── Global statistics
    ├── Event information
    └── Patch notes
```

---

## 🔄 DATA FLOW DIAGRAM

```
PLAYER ACTION → GAME CLIENT
                    ↓
            Sends to GAME SERVER
                    ↓
        SERVER validates & processes
                    ↓
        Updates DATABASE
                    ↓
        Sends confirmation back
                    ↓
            GAME CLIENT updates UI
                    ↓
        Syncs with COMPANION WEBSITE
                    ↓
        Appears in WEBSITE dashboard
```

---

## 🏆 END-GAME CONTENT

### A. INFINITE SCALING

```
ENDLESS MODE
├── Wave 1-10: Difficulty 1
├── Wave 11-20: Difficulty 2
├── Wave 21-30: Difficulty 3
└── Wave 31+: Exponential scaling
    ├── Enemy health ×1.15 per wave
    ├── Enemy damage ×1.10 per wave
    ├── Enemy speed ×1.05 per wave
    ├── Spawn count ×1.02 per wave
    └── Target: How far can you go?
```

### B. SEASONAL CONTENT

```
SEASONAL CALENDAR (52 weeks/year)
├── Week 1-10: Season 1
│   ├── New weapons
│   ├── New skins
│   ├── Battle pass
│   └── Narrative campaign chapter
├── Week 11-20: Season 2
├── Week 21-30: Season 3
└── Week 31-52: Seasonal events
    ├── Holiday events (Christmas, Halloween)
    ├── Crossover events (IP collabs)
    ├── Limited-time modes
    └── Exclusive cosmetics
```

---

## 📊 GAME METRICS TO TRACK

```
ANALYTICS & KPIs
│
├── Engagement Metrics
│   ├── Daily Active Users (DAU)
│   ├── Monthly Active Users (MAU)
│   ├── Session length: ~25 minutes
│   ├── Daily sessions: 2-3
│   └── Retention: D1/D7/D30
│
├── Monetization Metrics
│   ├── Average Revenue Per User (ARPU)
│   ├── Cost Per Install (CPI)
│   ├── Lifetime Value (LTV)
│   ├── Conversion to paid: 3-5%
│   └── ARPPU (paid users only)
│
├── Gameplay Metrics
│   ├── Average wave survived
│   ├── K/D ratio distribution
│   ├── Match completion rate
│   ├── Weapon popularity
│   └── Difficulty preference
│
└── Technical Metrics
    ├── Frame rate (target: 60 FPS)
    ├── Memory usage
    ├── Crash rate
    ├── Load time
    └── Server latency
```

---

## 🎨 DESIGN SYSTEM INTEGRATION IN GAME

```
NEXUS DESIGN SYSTEM (From Website)
│
├── COLOR PALETTE
│   ├── Canvas: #000000 (black background)
│   ├── Primary: #FFFFFF (white text)
│   ├── M Blue Light: #0066B1 (friendly elements)
│   ├── M Blue Dark: #1C69D4 (secondary)
│   ├── M Red: #E22718 (danger/health)
│   └── Accent: Tricolor stripe elements
│
├── TYPOGRAPHY
│   ├── Headline: Bold, uppercase
│   ├── Body: Light weight
│   ├── Labels: Tracking-spaced, caps
│   └── Font: Inter/BMW Type fallback
│
├── COMPONENTS
│   ├── Buttons: Rectangular, 0px radius
│   ├── Cards: Sharp corners, hairline borders
│   ├── HUD elements: Clean, minimal
│   ├── Accents: M tricolor bars
│   └── Loading: Geometric progress
│
└── TONE
    ├── Industrial precision
    ├── Motorsport energy
    ├── Tactical sophistication
    └── High-performance aesthetic
```

---

## 📈 DEVELOPMENT ROADMAP

```
MVPM (Minimum Viable Product Match)
├── Phase 1: Core Game (Weeks 1-8)
│   ├── Player controller ✓
│   ├── Weapon system ✓
│   ├── Enemy AI ✓
│   ├── Wave system ✓
│   ├── Basic UI ✓
│   └── Monetization setup ✓
│
├── Phase 2: Polish & Content (Weeks 9-12)
│   ├── 50+ weapons
│   ├── 10+ enemy types
│   ├── 3 maps
│   ├── Sound/VFX
│   ├── Mobile optimization
│   └── Cross-device testing
│
├── Phase 3: Features (Weeks 13-16)
│   ├── Battle pass system
│   ├── Leaderboards
│   ├── Cosmetics
│   ├── Achievements
│   ├── Seasonal events
│   └── Companion website
│
└── Phase 4: Launch (Week 17)
    ├── App Store submission
    ├── Pre-launch marketing
    ├── Community onboarding
    └── Live monitoring
```

---

## 🎮 SUMMARY: NEXUS GAME STRUCTURE

```
NEXUS = Tactical Combat Game
├── PRIMARY MODE: Wave survival
├── DEPTH: 156 weapons, 24 enemies, progression
├── MONETIZATION: Battle pass + cosmetics
├── PROGRESSION: 50 levels + seasonal ranks
├── ECONOMY: Dual currency (credits/gems)
├── CONTENT FRESHNESS: Weekly events, seasonal BP
└── VISION: "Skill-based, never pay-to-win"

Success Metrics:
├── 50k+ DAU within 3 months
├── 3+ session per day average
├── $5M+ annual revenue (1M players)
├── 4.5+ star rating
└── 60%+ D7 retention
```

---

**This structure leverages your website pages (HOME, BELT, AMMO, RADAR, PROJECT) as the core game systems!**