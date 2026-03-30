import { todaysPicks } from "./daily-music-picks.generated";

export interface DailyMusicPick {
  title: string;
  artist: string;
  cover: string;
  shortDesc: string;
  reason: string;
  trivia: string;
  triviaLink?: string;
  rating: string;
  mood: string;
  link: string;
}

export { todaysPicks };

export function generateMusicSceneTitle(songs: DailyMusicPick[]): { title: string; emoji: string } {
  const moodCounts: Record<string, number> = {};
  songs.forEach((song) => {
    song.mood.split("、").forEach((mood) => {
      moodCounts[mood.trim()] = (moodCounts[mood.trim()] || 0) + 1;
    });
  });

  const topMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]?.[0];

  const sceneMap: Record<string, { title: string; emoji: string }> = {
    热血: { title: "燃脂运动时间", emoji: "🔥" },
    摇滚: { title: "摇滚狂欢时间", emoji: "🎸" },
    温暖: { title: "治愈时光", emoji: "☕" },
    治愈: { title: "治愈夜晚", emoji: "🌙" },
    浪漫: { title: "浪漫时刻", emoji: "💕" },
    史诗: { title: "史诗时刻", emoji: "👑" },
    戏剧: { title: "戏剧之夜", emoji: "🎭" },
    叛逆: { title: "叛逆时刻", emoji: "🤘" },
    自由: { title: "自由时光", emoji: "🦅" },
  };

  if (topMood && sceneMap[topMood]) {
    return sceneMap[topMood];
  }

  return { title: "音乐分享时间", emoji: "🎵" };
}
