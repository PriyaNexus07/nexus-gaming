import React, { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function GamingApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = ['home', 'belt', 'ammo', 'radar', 'project'];
  const pageLabels = {
    home: 'HOME',
    belt: 'BELT',
    ammo: 'AMMO',
    radar: 'RADAR',
    project: 'PROJECT',
  };

  const navigationItems = ['HOME', 'BELT', 'AMMO', 'RADAR', 'PROJECT'];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'belt':
        return <BeltPage />;
      case 'ammo':
        return <AmmoPage />;
      case 'radar':
        return <RadarPage />;
      case 'project':
        return <ProjectPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-red-600"></div>
            <h1 className="text-xl font-bold tracking-tight">NEXUS</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item.toLowerCase())}
                className={`text-sm font-bold tracking-wider transition-colors ${
                  pageLabels[currentPage] === item
                    ? 'text-white border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="flex flex-col gap-4 p-6">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setCurrentPage(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm font-bold tracking-wider text-left transition-colors ${
                    pageLabels[currentPage] === item
                      ? 'text-white'
                      : 'text-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="pt-20">
        {renderPage()}
      </main>
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden pt-8">
        <div className="w-full h-1 absolute top-24 left-0 bg-gradient-to-r from-blue-600 via-blue-500 to-red-600"></div>
        
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 tracking-tighter">
                TACTICAL COMBAT EVOLVED
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                Enter the arena where precision engineering meets tactical warfare. Experience high-speed combat mechanics with weapon systems tuned for competitive dominance.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setCurrentPage('belt')}
                className="px-8 py-4 bg-white text-black font-bold tracking-wider text-sm hover:bg-gray-100 transition-colors"
              >
                EXPLORE ARSENAL
              </button>
              <button
                onClick={() => setCurrentPage('radar')}
                className="px-8 py-4 border-2 border-white text-white font-bold tracking-wider text-sm hover:bg-white hover:text-black transition-colors"
              >
                TACTICAL VIEW
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div>
                <p className="text-3xl font-black text-blue-500">94M</p>
                <p className="text-xs text-gray-400 tracking-wider uppercase mt-2">Players Active</p>
              </div>
              <div>
                <p className="text-3xl font-black text-blue-500">156</p>
                <p className="text-xs text-gray-400 tracking-wider uppercase mt-2">Weapon Variants</p>
              </div>
              <div>
                <p className="text-3xl font-black text-blue-500">24/7</p>
                <p className="text-xs text-gray-400 tracking-wider uppercase mt-2">Live Servers</p>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative h-96 lg:h-full min-h-96 lg:min-h-screen -mr-6 -mb-20 lg:mb-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent rounded-none flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(6,83,182,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
              <div className="relative text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-none border-2 border-blue-500/30 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <svg className="w-24 h-24 md:w-32 md:h-32 mx-auto text-blue-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <p className="text-sm text-gray-400 tracking-wider">LOADING COMBAT FEED...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-red-600"></div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-black py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter">LATEST UPDATES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Season 12 Launch', desc: 'New weapons and maps arrive this Friday' },
              { title: 'Competitive League', desc: '50M prize pool for regional qualifiers' },
              { title: 'Cross Platform', desc: 'Play across PC, console, and mobile devices' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900/50 border border-gray-800 p-8 hover:border-blue-500/50 transition-colors">
                <h3 className="text-xl font-black mb-3 tracking-wider">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center text-blue-500 text-xs font-bold cursor-pointer">
                  LEARN MORE <ChevronRight size={14} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BeltPage() {
  const weaponTypes = [
    { name: 'ASSAULT RIFLE', damage: 45, range: 85, fire_rate: 720 },
    { name: 'SNIPER RIFLE', damage: 95, range: 150, fire_rate: 60 },
    { name: 'SMG', damage: 28, range: 40, fire_rate: 960 },
    { name: 'SHOTGUN', damage: 78, range: 12, fire_rate: 120 },
    { name: 'PISTOL', damage: 35, range: 50, fire_rate: 300 },
    { name: 'LAUNCHER', damage: 120, range: 100, fire_rate: 30 },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-4 mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-red-600"></div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter">ARSENAL BELT</h1>
          <p className="text-gray-400 max-w-xl text-lg">Customize your loadout with precision-engineered weaponry designed for tactical supremacy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weaponTypes.map((weapon, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800 p-8 hover:border-blue-500/50 transition-all hover:bg-gray-900 group cursor-pointer">
              <h3 className="text-xl font-black mb-6 tracking-wider">{weapon.name}</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs text-gray-400 font-bold">DAMAGE</p>
                    <p className="text-sm font-black text-red-500">{weapon.damage}</p>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-none overflow-hidden">
                    <div className="bg-red-600 h-full" style={{ width: `${weapon.damage}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs text-gray-400 font-bold">RANGE</p>
                    <p className="text-sm font-black text-blue-500">{weapon.range}</p>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-none overflow-hidden">
                    <div className="bg-blue-600 h-full" style={{ width: `${(weapon.range / 150) * 100}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs text-gray-400 font-bold">FIRE RATE</p>
                    <p className="text-sm font-black text-green-500">{weapon.fire_rate}</p>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-none overflow-hidden">
                    <div className="bg-green-600 h-full" style={{ width: `${(weapon.fire_rate / 960) * 100}%` }}></div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-3 text-sm tracking-wider hover:bg-blue-700 transition-colors">
                EQUIP
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AmmoPage() {
  const ammoTypes = [
    { type: '5.56 NATO', stock: 420, capacity: 30, rarity: 'COMMON' },
    { type: '.308 MAGNUM', stock: 120, capacity: 5, rarity: 'RARE' },
    { type: '9MM SUBSONIC', stock: 680, capacity: 35, rarity: 'COMMON' },
    { type: '12 GAUGE SHELL', stock: 89, capacity: 8, rarity: 'RARE' },
    { type: '.45 ACP', stock: 240, capacity: 12, rarity: 'COMMON' },
    { type: 'INCENDIARY ROUND', stock: 24, capacity: 3, rarity: 'EPIC' },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-4 mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-red-600"></div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter">AMMUNITION DEPOT</h1>
          <p className="text-gray-400 max-w-xl text-lg">Manage your inventory with military-grade precision. Track ammo types and restock critical supplies.</p>
        </div>

        <div className="space-y-4">
          {ammoTypes.map((ammo, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800 p-6 hover:border-blue-500/50 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-8 flex-1">
                <div className="w-16 h-16 bg-gray-800 flex items-center justify-center text-blue-500 text-2xl font-black">
                  •
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-black mb-2 tracking-wider">{ammo.type}</h3>
                  <div className="flex gap-8 text-xs">
                    <div>
                      <p className="text-gray-500 mb-1">STOCK</p>
                      <p className="font-black text-white">{ammo.stock}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">PER MAG</p>
                      <p className="font-black text-white">{ammo.capacity}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">MAGAZINES</p>
                      <p className="font-black text-white">{Math.floor(ammo.stock / ammo.capacity)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-xs font-black tracking-wider mb-2 ${
                  ammo.rarity === 'EPIC' ? 'text-purple-400' : 
                  ammo.rarity === 'RARE' ? 'text-blue-400' : 
                  'text-gray-400'
                }`}>
                  {ammo.rarity}
                </p>
                <button className="px-6 py-2 bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors tracking-wider">
                  RESTOCK
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RadarPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-4 mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-red-600"></div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter">TACTICAL RADAR</h1>
          <p className="text-gray-400 max-w-xl text-lg">Real-time threat assessment and tactical positioning. Monitor all active combat zones simultaneously.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Radar */}
          <div className="lg:col-span-2">
            <div className="relative w-full aspect-square bg-gray-900/50 border-2 border-gray-800 p-8">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Radar circles */}
                <circle cx="200" cy="200" r="160" fill="none" stroke="#1f2937" strokeWidth="1"/>
                <circle cx="200" cy="200" r="120" fill="none" stroke="#1f2937" strokeWidth="1"/>
                <circle cx="200" cy="200" r="80" fill="none" stroke="#1f2937" strokeWidth="1"/>
                <circle cx="200" cy="200" r="40" fill="none" stroke="#1f2937" strokeWidth="1"/>
                
                {/* Crosshairs */}
                <line x1="40" y1="200" x2="360" y2="200" stroke="#1f2937" strokeWidth="1"/>
                <line x1="200" y1="40" x2="200" y2="360" stroke="#1f2937" strokeWidth="1"/>
                
                {/* Active threats */}
                <circle cx="200" cy="120" r="8" fill="#ef4444" opacity="0.8"/>
                <circle cx="280" cy="200" r="6" fill="#f97316" opacity="0.7"/>
                <circle cx="160" cy="240" r="7" fill="#ef4444" opacity="0.8"/>
                <circle cx="240" cy="160" r="5" fill="#fbbf24" opacity="0.6"/>
                <circle cx="120" cy="280" r="6" fill="#34d399" opacity="0.7"/>
                
                {/* Pulse lines */}
                <circle cx="200" cy="200" r="200" fill="none" stroke="#0ea5e9" strokeWidth="2" opacity="0.3" style={{ animation: 'pulse 2s infinite' }}/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-gray-500 font-mono">SCAN ACTIVE</p>
              </div>
            </div>
          </div>

          {/* Threat List */}
          <div className="space-y-4">
            <h3 className="text-lg font-black tracking-wider mb-6">ACTIVE THREATS</h3>
            {[
              { name: 'ALPHA-7', distance: '245m', threat: 'HIGH', color: 'red' },
              { name: 'BRAVO-2', distance: '420m', threat: 'MEDIUM', color: 'orange' },
              { name: 'DELTA-9', distance: '380m', threat: 'HIGH', color: 'red' },
              { name: 'ECHO-3', distance: '520m', threat: 'LOW', color: 'yellow' },
              { name: 'FOXTROT-1', distance: '680m', threat: 'MEDIUM', color: 'green' },
            ].map((threat, idx) => (
              <div key={idx} className={`border-l-4 pl-4 py-3 text-sm ${
                threat.color === 'red' ? 'border-red-600 bg-red-950/20' :
                threat.color === 'orange' ? 'border-orange-600 bg-orange-950/20' :
                threat.color === 'yellow' ? 'border-yellow-600 bg-yellow-950/20' :
                'border-green-600 bg-green-950/20'
              }`}>
                <p className="font-black text-white">{threat.name}</p>
                <p className="text-gray-400 text-xs mt-1">{threat.distance} • {threat.threat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { r: 200; opacity: 0.3; }
          50% { r: 260; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function ProjectPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-4 mb-16">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-red-600"></div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter">PROJECT NEXUS</h1>
          <p className="text-gray-400 max-w-xl text-lg">The next generation of competitive combat gaming. Where precision meets tactical depth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-black mb-4 tracking-wider">CORE VISION</h3>
              <p className="text-gray-400 leading-relaxed">
                Project NEXUS redefines tactical shooter gameplay by combining hardware-accelerated ballistics simulation with real-time squad coordination tools. Every bullet trajectory is calculated at frame-perfect precision, rewarding practiced aim and intelligent positioning.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4 tracking-wider">TECHNICAL STACK</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-3"><span className="text-blue-500">›</span> Unreal Engine 5.4</li>
                <li className="flex items-center gap-3"><span className="text-blue-500">›</span> Custom Ballistics Physics</li>
                <li className="flex items-center gap-3"><span className="text-blue-500">›</span> 144Hz+ Tick Rate Servers</li>
                <li className="flex items-center gap-3"><span className="text-blue-500">›</span> Advanced Anti-Cheat AI</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-black mb-4 tracking-wider">ROADMAP 2026</h3>
              <div className="space-y-3 text-sm">
                {[
                  { q: 'Q2', feature: 'Season 12 Launch - 8 New Maps' },
                  { q: 'Q3', feature: 'Ranked 2.0 Overhaul' },
                  { q: 'Q4', feature: 'Global Championship Finals' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 text-gray-400">
                    <p className="font-black text-blue-500 w-10">{item.q}</p>
                    <p>{item.feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-4 tracking-wider">FEATURES</h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {['256 Players', 'Dynamic Weather', 'Loadout Labs', 'Live Stats', 'Replay System', 'Community Servers'].map((feat, idx) => (
                  <div key={idx} className="bg-gray-900 border border-gray-800 px-4 py-3 font-bold tracking-wider">
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 pt-16">
          <h3 className="text-2xl font-black mb-8 tracking-wider">DEVELOPMENT STATS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: '4.2M', label: 'Lines of Code' },
              { stat: '823', label: 'Developers' },
              { stat: '12', label: 'Years in Dev' },
              { stat: '180', label: 'Countries' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-black text-blue-500 mb-2">{item.stat}</p>
                <p className="text-xs text-gray-400 font-bold tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}