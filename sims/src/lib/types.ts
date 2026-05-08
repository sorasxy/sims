export type LifeStage = 'childhood' | 'youth' | 'young-adult' | 'middle-age' | 'elder';
export type Atmosphere = 'day' | 'night' | 'danger';
export type StatKey = 'health' | 'knowledge' | 'wealth' | 'interpersonal' | 'mood';

export interface StatEffects {
  health?: number;
  knowledge?: number;
  wealth?: number;
  interpersonal?: number;
  mood?: number;
}

export interface StatRequirement {
  stat: StatKey;
  min: number;
}

export interface StoryOption {
  text: string;
  effects: StatEffects;
  nextNode: string;
  requires?: StatRequirement[];
}

export interface StoryNode {
  id: string;
  stage: LifeStage;
  description: string;
  atmosphere: Atmosphere;
  options: [StoryOption, StoryOption, StoryOption];
}

export interface Ending {
  id: string;
  title: string;
  description: string;
  dominantStat: StatKey | 'balanced';
}

export interface RandomEvent {
  id: string;
  description: string;
  options: [StoryOption, StoryOption];
}

export interface Stats {
  health: number;
  knowledge: number;
  wealth: number;
  interpersonal: number;
  mood: number;
}

export const STAGE_LABELS: Record<LifeStage, string> = {
  childhood: '童年',
  youth: '少年',
  'young-adult': '青年',
  'middle-age': '中年',
  elder: '老年',
};

export const STAT_LABELS: Record<StatKey, string> = {
  health: '健康',
  knowledge: '知识',
  wealth: '财富',
  interpersonal: '人际',
  mood: '心情',
};

export const STAT_ICONS: Record<StatKey, string> = {
  health: '❤️',
  knowledge: '📖',
  wealth: '💰',
  interpersonal: '🤝',
  mood: '☀️',
};
