'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import type { Stats, StatEffects, StoryNode, StoryOption, Ending, RandomEvent, StatKey } from '@/lib/types';
import { STAT_LABELS, STAT_ICONS, STAGE_LABELS } from '@/lib/types';
import { getNode, getRandomEvent, resetRandomEvents, determineEnding } from '@/lib/story';

const TIMER_SECONDS = 600; // 10 minutes

// 三种出身：书香门第 / 富裕家庭 / 工人家庭
type BirthType = 'scholar' | 'wealthy' | 'worker';

const BIRTH_CONFIGS: Record<BirthType, { startNode: string; stats: Stats }> = {
  scholar: {
    startNode: 'c01a',
    stats: { health: 40, knowledge: 75, wealth: 45, interpersonal: 40, mood: 55 },
  },
  wealthy: {
    startNode: 'c01b',
    stats: { health: 50, knowledge: 40, wealth: 75, interpersonal: 35, mood: 45 },
  },
  worker: {
    startNode: 'c01c',
    stats: { health: 60, knowledge: 40, wealth: 35, interpersonal: 60, mood: 55 },
  },
};

function randomBirth(): { startNode: string; stats: Stats } {
  const types: BirthType[] = ['scholar', 'wealthy', 'worker'];
  const pick = types[Math.floor(Math.random() * types.length)];
  return BIRTH_CONFIGS[pick];
}

function clampStat(v: number): number {
  return Math.max(0, v); // No upper cap
}

function applyEffects(stats: Stats, effects: StatEffects): Stats {
  return {
    health: clampStat(stats.health + (effects.health ?? 0)),
    knowledge: clampStat(stats.knowledge + (effects.knowledge ?? 0)),
    wealth: clampStat(stats.wealth + (effects.wealth ?? 0)),
    interpersonal: clampStat(stats.interpersonal + (effects.interpersonal ?? 0)),
    mood: clampStat(stats.mood + (effects.mood ?? 0)),
  };
}

function canSelectOption(stats: Stats, option: StoryOption): boolean {
  if (!option.requires || option.requires.length === 0) return true;
  return option.requires.every((req) => stats[req.stat] >= req.min);
}

function hasZeroStat(stats: Stats): string | null {
  for (const [key, val] of Object.entries(stats)) {
    if (val <= 0) return STAT_LABELS[key as keyof Stats];
  }
  return null;
}

// --- Typewriter hook ---
function useTypewriter(text: string, speed: number = 40) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayed, done };
}

// --- Geometric decorations ---
function GeoDecorations() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Top left triangle */}
      <div
        className="absolute -top-20 -left-20 w-64 h-64 opacity-10"
        style={{
          background: 'linear-gradient(135deg, #f0abfc 0%, transparent 60%)',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      />
      {/* Top right arch */}
      <div
        className="absolute -top-10 -right-10 w-48 h-48 opacity-10"
        style={{
          background: 'linear-gradient(225deg, #67e8f9 0%, transparent 60%)',
          clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
        }}
      />
      {/* Bottom left diamond */}
      <div
        className="absolute -bottom-16 -left-16 w-40 h-40 opacity-8"
        style={{
          background: 'linear-gradient(45deg, #fde68a 0%, transparent 60%)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
      />
      {/* Bottom right circle */}
      <div
        className="absolute -bottom-20 -right-20 w-56 h-56 opacity-8"
        style={{
          background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      {/* Center floating diamond */}
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 opacity-5 animate-pulse"
        style={{
          background: 'linear-gradient(135deg, #f9a8d4 0%, transparent 60%)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
      />
    </div>
  );
}

export default function Game() {
  const [gameState, setGameState] = useState<'title' | 'playing' | 'ending' | 'gameover'>('title');
  const [stats, setStats] = useState<Stats>({ health: 0, knowledge: 0, wealth: 0, interpersonal: 0, mood: 0 });
  const [currentNode, setCurrentNode] = useState<StoryNode | null>(null);
  const [nodesVisited, setNodesVisited] = useState(0);
  const [ending, setEnding] = useState<Ending | null>(null);
  const [deadStat, setDeadStat] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [showRandomEvent, setShowRandomEvent] = useState(false);
  const [currentRandomEvent, setCurrentRandomEvent] = useState<RandomEvent | null>(null);
  const [selectionsCount, setSelectionsCount] = useState(0);
  const [statAnimations, setStatAnimations] = useState<Record<string, boolean>>({});
  const [fadeKey, setFadeKey] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Start game
  const startGame = useCallback(() => {
    const birth = randomBirth();
    setStats(birth.stats);
    const firstNode = getNode(birth.startNode);
    setCurrentNode(firstNode ?? null);
    setNodesVisited(0);
    setEnding(null);
    setDeadStat(null);
    setTimeLeft(TIMER_SECONDS);
    setShowRandomEvent(false);
    setCurrentRandomEvent(null);
    setSelectionsCount(0);
    resetRandomEvents();
    setGameState('playing');
    setFadeKey((k) => k + 1);
  }, []);

  // Timer
  useEffect(() => {
    if (gameState !== 'playing') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          // Time's up - determine ending
          const e = determineEnding(stats);
          setEnding(e);
          setGameState('ending');
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState, stats]);

  // Handle option selection
  const handleOption = useCallback(
    (option: StoryOption) => {
      const newStats = applyEffects(stats, option.effects);
      const zeroStat = hasZeroStat(newStats);

      setStats(newStats);

      // Animate stat changes
      const animations: Record<string, boolean> = {};
      for (const [k, v] of Object.entries(option.effects)) {
        if (v !== undefined && v !== 0) animations[k] = true;
      }
      setStatAnimations(animations);
      setTimeout(() => setStatAnimations({}), 800);

      if (zeroStat) {
        setDeadStat(zeroStat);
        setGameState('gameover');
        return;
      }

      const newCount = selectionsCount + 1;
      setSelectionsCount(newCount);

      // Check for random event every 3 selections
      if (newCount % 3 === 0) {
        const re = getRandomEvent();
        if (re) {
          setCurrentRandomEvent(re);
          setShowRandomEvent(true);
        }
      }

      // Move to next node
      if (option.nextNode === 'e_end') {
        const e = determineEnding(newStats);
        setEnding(e);
        setGameState('ending');
        return;
      }

      const nextNode = getNode(option.nextNode);
      if (nextNode) {
        setCurrentNode(nextNode);
        setNodesVisited((n) => n + 1);
        setFadeKey((k) => k + 1);
      }
    },
    [stats, selectionsCount]
  );

  // Handle random event selection
  const handleRandomEvent = useCallback(
    (option: StoryOption) => {
      const newStats = applyEffects(stats, option.effects);
      const zeroStat = hasZeroStat(newStats);
      setStats(newStats);
      setShowRandomEvent(false);
      setCurrentRandomEvent(null);

      if (zeroStat) {
        setDeadStat(zeroStat);
        setGameState('gameover');
      }
    },
    [stats]
  );

  // Share text
  const getShareText = useCallback(() => {
    const minutes = Math.floor((TIMER_SECONDS - timeLeft) / 60);
    const e = ending?.title ?? '未知';
    return `我用${minutes}分钟过完了一生，才知道人生每个选择都有代价，最后结局是【${e}】，健康${stats.health}/知识${stats.knowledge}/财富${stats.wealth}/人际${stats.interpersonal}/心情${stats.mood}`;
  }, [ending, stats, timeLeft]);

  const [copied, setCopied] = useState(false);
  const handleShare = useCallback(() => {
    const text = getShareText();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [getShareText]);

  // Typewriter - must be called before any early returns (rules of hooks)
  const { displayed, done: typewriterDone } = useTypewriter(
    gameState === 'playing' && currentNode ? currentNode.description : '',
    35
  );

  // Background gradient based on atmosphere
  const bgGradient = currentNode
    ? currentNode.atmosphere === 'day'
      ? 'from-rose-50 via-amber-50 to-sky-50'
      : currentNode.atmosphere === 'night'
        ? 'from-indigo-50 via-purple-50 to-slate-100'
        : 'from-orange-50 via-red-50 to-rose-100'
    : 'from-rose-50 via-amber-50 to-sky-50';

  // Life stage progress - based on actual story node stage, not nodesVisited
  const stageOrder: Record<string, number> = { childhood: 0, youth: 1, 'young-adult': 2, 'middle-age': 3, elder: 4 };
  const currentStageIndex = currentNode ? (stageOrder[currentNode.stage] ?? 0) : 0;
  // Progress: each stage occupies 0.2 of the bar. Within a stage, use node position.
  // Approximate within-stage progress using node ID suffix (e.g. c01=1/20, c15=15/20)
  const nodeNumMatch = currentNode?.id.match(/(\d+)$/);
  const withinStageProgress = nodeNumMatch ? parseInt(nodeNumMatch[1]) / 20 : 0;
  const stageProgress = Math.min((currentStageIndex + withinStageProgress) / 5, 1);
  const stages = ['childhood', 'youth', 'young-adult', 'middle-age', 'elder'] as const;

  // Format time
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  // ========== TITLE SCREEN ==========
  if (gameState === 'title') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 flex items-center justify-center p-4">
        <GeoDecorations />
        <div className="relative z-10 text-center max-w-lg mx-auto">
          {/* Decorative arch */}
          <div className="mx-auto mb-8 w-32 h-32 relative">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #f9a8d4, #c4b5fd, #67e8f9)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                opacity: 0.6,
              }}
            />
            <div
              className="absolute inset-2"
              style={{
                background: 'linear-gradient(135deg, #fdf2f8, #faf5ff, #ecfeff)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-4xl">✦</div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3 tracking-wide">
            人生履历
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 mb-2 italic">
            所有馈赠都有标价
          </p>
          <p className="text-sm text-slate-400 mb-10 max-w-xs mx-auto">
            每个选择都将改写你的人生轨迹，你准备好了吗？
          </p>

          <button
            onClick={startGame}
            className="px-8 py-3 rounded-full text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #f9a8d4, #c4b5fd)',
            }}
          >
            开始人生
          </button>

          <div className="mt-8 flex justify-center gap-6 text-xs text-slate-400">
            <span>❤️ 健康</span>
            <span>📖 知识</span>
            <span>💰 财富</span>
            <span>🤝 人际</span>
            <span>☀️ 心情</span>
          </div>
        </div>
      </div>
    );
  }

  // ========== GAME OVER (stat reached 0) ==========
  if (gameState === 'gameover') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 flex items-center justify-center p-4">
        <GeoDecorations />
        <div className="relative z-10 text-center max-w-md mx-auto">
          <div className="text-6xl mb-6">💔</div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">人生已结束</h2>
          <p className="text-slate-600 mb-2">
            你的<span className="font-bold text-red-500">{deadStat}</span>值降到了0
          </p>
          <p className="text-sm text-slate-400 mb-8">
            人生如履薄冰，任何一项归零便再无回头路。
          </p>
          <div className="flex justify-center gap-4 mb-6">
            {Object.entries(stats).map(([key, val]) => (
              <div key={key} className="text-center">
                <div className="text-lg">{STAT_ICONS[key as keyof Stats]}</div>
                <div className={`text-sm font-medium ${val <= 0 ? 'text-red-500' : 'text-slate-700'}`}>
                  {val}
                </div>
                <div className="text-xs text-slate-400">{STAT_LABELS[key as keyof Stats]}</div>
              </div>
            ))}
          </div>
          <button
            onClick={startGame}
            className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{ background: 'linear-gradient(135deg, #f9a8d4, #c4b5fd)' }}
          >
            再来一次
          </button>
        </div>
      </div>
    );
  }

  // ========== ENDING ==========
  if (gameState === 'ending' && ending) {
    const isBalanced = ending.dominantStat === 'balanced';
    const gradientColors = isBalanced
      ? 'from-amber-50 via-yellow-50 to-lime-50'
      : ending.dominantStat === 'health'
        ? 'from-green-50 via-emerald-50 to-teal-50'
        : ending.dominantStat === 'knowledge'
          ? 'from-blue-50 via-indigo-50 to-violet-50'
          : ending.dominantStat === 'wealth'
            ? 'from-amber-50 via-yellow-50 to-orange-50'
            : ending.dominantStat === 'interpersonal'
              ? 'from-pink-50 via-rose-50 to-red-50'
              : 'from-purple-50 via-fuchsia-50 to-pink-50';

    return (
      <div className={`min-h-screen bg-gradient-to-br ${gradientColors} flex items-center justify-center p-4`}>
        <GeoDecorations />
        <div className="relative z-10 text-center max-w-lg mx-auto">
          {/* Hexagon decoration */}
          <div className="mx-auto mb-6 w-24 h-24 relative">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #f9a8d4, #c4b5fd, #67e8f9)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                opacity: 0.5,
              }}
            />
            <div
              className="absolute inset-2 flex items-center justify-center text-3xl"
              style={{
                background: 'linear-gradient(135deg, #fefce8, #fdf2f8, #ecfeff)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              {ending.dominantStat === 'health'
                ? '💪'
                : ending.dominantStat === 'knowledge'
                  ? '📚'
                  : ending.dominantStat === 'wealth'
                    ? '💎'
                    : ending.dominantStat === 'interpersonal'
                      ? '🌹'
                      : ending.dominantStat === 'mood'
                        ? '🌈'
                        : '⚖️'}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-800 mb-2">{ending.title}</h2>
          <p className="text-slate-600 mb-8 leading-relaxed text-sm">{ending.description}</p>

          {/* Final stats */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-6 shadow-sm">
            <h3 className="text-sm font-medium text-slate-500 mb-3">最终数值</h3>
            <div className="flex justify-around">
              {Object.entries(stats).map(([key, val]) => (
                <div key={key} className="text-center">
                  <div className="text-xl mb-1">{STAT_ICONS[key as keyof Stats]}</div>
                  <div className="text-lg font-bold text-slate-800">{val}</div>
                  <div className="text-xs text-slate-400">{STAT_LABELS[key as keyof Stats]}</div>
                  <div className="w-12 h-1.5 bg-slate-100 rounded-full mt-1 mx-auto overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min(val, 100)}%`,
                        background:
                          val >= 70
                            ? 'linear-gradient(90deg, #86efac, #34d399)'
                            : val >= 40
                              ? 'linear-gradient(90deg, #fde68a, #fbbf24)'
                              : 'linear-gradient(90deg, #fca5a5, #f87171)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={startGame}
              className="px-6 py-2.5 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{ background: 'linear-gradient(135deg, #f9a8d4, #c4b5fd)' }}
            >
              再来一次
            </button>
            <button
              onClick={handleShare}
              className="px-6 py-2.5 rounded-full text-slate-700 font-medium border border-slate-200 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              {copied ? '已复制 ✓' : '分享结果'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ========== PLAYING ==========

  const isUrgent = timeLeft <= 60 && timeLeft > 0;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient} relative transition-colors duration-700`}>
      <GeoDecorations />

      {/* Urgency overlay - last minute */}
      {isUrgent && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'linear-gradient(180deg, rgba(239,68,68,0.08) 0%, transparent 30%, transparent 70%, rgba(239,68,68,0.12) 100%)',
              animationDuration: '2s',
            }}
          />
          {/* Pulsing border */}
          <div
            className="absolute inset-0 border-4 border-red-300/30 rounded-none animate-pulse"
            style={{ animationDuration: '1.5s' }}
          />
        </div>
      )}

      <div className="relative z-10 max-w-lg mx-auto px-4 py-3 sm:py-4 flex flex-col min-h-screen">
        {/* Top bar: timer + stage progress */}
        <div className={`bg-white/60 backdrop-blur-sm rounded-2xl p-3 mb-3 shadow-sm ${isUrgent ? 'ring-2 ring-red-200' : ''}`}>
          {/* Timer */}
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs ${isUrgent ? 'text-red-400 font-medium' : 'text-slate-400'}`}>
              {isUrgent ? '⏰ 时间紧迫' : '倒计时'}
            </span>
            <span className={`text-sm font-mono font-bold ${isUrgent ? 'text-red-500 animate-pulse' : 'text-slate-700'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>

          {/* Stage progress */}
          <div className="relative">
            <div className="flex justify-between mb-1">
              {stages.map((s, i) => (
                <span
                  key={s}
                  className={`text-[10px] transition-colors duration-300 ${
                    stageProgress >= (i + 1) / 5
                      ? 'text-slate-700 font-medium'
                      : stageProgress >= i / 5
                        ? 'text-slate-600'
                        : 'text-slate-300'
                  }`}
                >
                  {STAGE_LABELS[s]}
                </span>
              ))}
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${stageProgress * 100}%`,
                  background: 'linear-gradient(90deg, #f9a8d4, #c4b5fd, #67e8f9)',
                }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-between mt-3 gap-1">
            {Object.entries(stats).map(([key, val]) => {
              const k = key as keyof Stats;
              const isAnimating = statAnimations[key];
              const barWidth = Math.min(val, 100);
              return (
                <div key={key} className="flex-1 text-center">
                  <div className="text-sm">{STAT_ICONS[k]}</div>
                  <div
                    className={`text-xs font-bold transition-all duration-300 ${
                      isAnimating ? 'scale-125' : ''
                    } ${val >= 70 ? 'text-emerald-600' : val >= 40 ? 'text-amber-600' : 'text-red-500'}`}
                  >
                    {val}
                  </div>
                  <div className="text-[9px] text-slate-400 leading-tight">{STAT_LABELS[k]}</div>
                  <div className="w-full h-1 bg-slate-100 rounded-full mt-0.5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${barWidth}%`,
                        background:
                          val >= 70
                            ? 'linear-gradient(90deg, #86efac, #34d399)'
                            : val >= 40
                              ? 'linear-gradient(90deg, #fde68a, #fbbf24)'
                              : 'linear-gradient(90deg, #fca5a5, #f87171)',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scene text */}
        <div
          key={fadeKey}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 mb-3 shadow-sm flex-1 min-h-[180px] transition-all duration-300"
        >
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
            {displayed}
            {!typewriterDone && <span className="animate-pulse text-slate-400">|</span>}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2 pb-4">
          {typewriterDone &&
            currentNode?.options.map((option, idx) => {
              const selectable = canSelectOption(stats, option);
              const effects = Object.entries(option.effects)
                .filter(([, v]) => v !== undefined && v !== 0) as [string, number][];
              const hasNegative = effects.some(([, v]) => v < 0);
              const negativeEffects = effects.filter(([, v]) => v < 0);
              const positiveEffects = effects.filter(([, v]) => v > 0);

              return (
                <button
                  key={`${currentNode.id}-${idx}`}
                  onClick={() => selectable && handleOption(option)}
                  disabled={!selectable}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm leading-relaxed transition-all duration-200 active:scale-[0.98] ${
                    selectable
                      ? hasNegative
                        ? 'bg-red-50/80 backdrop-blur-sm border border-red-200 text-slate-700 hover:scale-[1.02] hover:shadow-md hover:bg-red-50 hover:border-red-300'
                        : 'bg-white/70 backdrop-blur-sm border border-slate-100 text-slate-700 hover:scale-[1.02] hover:shadow-md hover:bg-white/90 hover:border-purple-200'
                      : 'bg-slate-100/80 backdrop-blur-sm border border-slate-200 text-slate-400 cursor-not-allowed opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <span className="text-slate-400 mr-2">{idx + 1}.</span>
                      {option.text}
                      {option.requires && (
                        <span className={`ml-2 text-[10px] ${selectable ? 'text-slate-400' : 'text-red-400'}`}>
                          {selectable ? '✓' : '🔒'}{option.requires.map((r) => `${STAT_LABELS[r.stat]}≥${r.min}`).join(', ')}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end shrink-0 mt-0.5">
                      {negativeEffects.map(([k, v]) => (
                        <span key={k} className="text-[10px] px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-medium">
                          {STAT_ICONS[k as StatKey]}{v}
                        </span>
                      ))}
                      {positiveEffects.map(([k, v]) => (
                        <span key={k} className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 font-medium">
                          {STAT_ICONS[k as StatKey]}+{v}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
        </div>
      </div>

      {/* Random Event Dialog */}
      {showRandomEvent && currentRandomEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 max-w-sm w-full shadow-xl border border-amber-200">
            <div className="text-center mb-1">
              <span className="text-xs font-medium text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
                随机事件
              </span>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed mt-4 mb-5">
              {currentRandomEvent.description}
            </p>
            <div className="space-y-2">
              {currentRandomEvent.options.map((opt, idx) => {
                const effects = Object.entries(opt.effects)
                  .filter(([, v]) => v !== undefined && v !== 0) as [string, number][];
                const hasNeg = effects.some(([, v]) => v < 0);
                const negEffects = effects.filter(([, v]) => v < 0);
                const posEffects = effects.filter(([, v]) => v > 0);
                return (
                  <button
                    key={idx}
                    onClick={() => handleRandomEvent(opt)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98] ${
                      hasNeg
                        ? 'bg-red-50/80 border border-red-200 text-slate-700 hover:border-red-300'
                        : 'bg-white border border-slate-100 text-slate-700 hover:border-amber-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex-1">{opt.text}</span>
                      <div className="flex flex-wrap gap-1 justify-end shrink-0 mt-0.5">
                        {negEffects.map(([k, v]) => (
                          <span key={k} className="text-[10px] px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-medium">
                            {STAT_ICONS[k as StatKey]}{v}
                          </span>
                        ))}
                        {posEffects.map(([k, v]) => (
                          <span key={k} className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 font-medium">
                            {STAT_ICONS[k as StatKey]}+{v}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
