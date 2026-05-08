import type { StoryNode, Ending, RandomEvent, Stats, StatKey } from './types';
import { childhoodNodes } from './story-childhood';
import { youthNodes } from './story-youth';
import { youngAdultNodes } from './story-young-adult';
import { middleAgeNodes } from './story-middle-age';
import { elderNodes } from './story-elder';
import { endings, randomEvents } from './story-meta';

const allNodes: StoryNode[] = [
  ...childhoodNodes,
  ...youthNodes,
  ...youngAdultNodes,
  ...middleAgeNodes,
  ...elderNodes,
];

const nodeMap = new Map<string, StoryNode>();
for (const node of allNodes) {
  nodeMap.set(node.id, node);
}

export function getNode(id: string): StoryNode | undefined {
  return nodeMap.get(id);
}

export function getEnding(id: string): Ending | undefined {
  return endings.find((e) => e.id === id);
}

export function getAllEndings(): Ending[] {
  return endings;
}

const usedRandomEventIds = new Set<string>();

export function getRandomEvent(): RandomEvent | null {
  const available = randomEvents.filter((e) => !usedRandomEventIds.has(e.id));
  if (available.length === 0) {
    // All events have been used, reset
    usedRandomEventIds.clear();
    const idx = Math.floor(Math.random() * randomEvents.length);
    usedRandomEventIds.add(randomEvents[idx].id);
    return randomEvents[idx];
  }
  const idx = Math.floor(Math.random() * available.length);
  usedRandomEventIds.add(available[idx].id);
  return available[idx];
}

export function resetRandomEvents(): void {
  usedRandomEventIds.clear();
}

export function determineEnding(stats: Stats): Ending {
  const keys: StatKey[] = ['health', 'knowledge', 'wealth', 'interpersonal', 'mood'];
  const values = keys.map((k) => stats[k]);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  // If the stats are relatively balanced (max - min < 20 and max < avg + 15), it's "balanced"
  if (max - min < 20 && max < avg + 15) {
    return endings.find((e) => e.dominantStat === 'balanced')!;
  }

  // Find the dominant stat (highest value)
  const dominantKey = keys.find((k) => stats[k] === max)!;
  return endings.find((e) => e.dominantStat === dominantKey)!;
}

export function getStageFromProgress(nodesVisited: number, totalTypical: number): string {
  const ratio = Math.min(nodesVisited / totalTypical, 1);
  if (ratio < 0.2) return '童年';
  if (ratio < 0.4) return '少年';
  if (ratio < 0.6) return '青年';
  if (ratio < 0.8) return '中年';
  return '老年';
}
