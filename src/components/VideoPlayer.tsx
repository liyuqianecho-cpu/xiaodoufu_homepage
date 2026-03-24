"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://ark-content-generation-cn-beijing.tos-cn-beijing.volces.com/doubao-seedance-1-5-pro/02177434378003000000000000000000000ffffac150c83bfe3c8.mp4";

  return (
    <div className="my-8">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#e8dcc3] bg-white shadow-lg">
        {!isPlaying ? (
          <div className="relative aspect-video cursor-pointer" onClick={() => setIsPlaying(true)}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#f4ddc5] to-[#e8c18e] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Play size={32} className="text-[#8b6f47] ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-sm font-medium text-[#8b6f47]">🐱 小豆腐晒太阳</p>
              <p className="text-xs text-[#a89f91] mt-1">点击播放视频</p>
            </div>
          </div>
        ) : (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full aspect-video"
            onEnded={() => setIsPlaying(false)}
          />
        )}
      </div>
      <p className="text-center text-xs text-[#a89f91] mt-3">
        🎬 用火山方舟 doubao-seedance-1-5-pro 生成
      </p>
    </div>
  );
}
