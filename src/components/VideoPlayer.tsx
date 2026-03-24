"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "/videos/xiaodoufu-sunbathing.mp4";

  return (
    <div className="my-8">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#e8dcc3] bg-white shadow-lg">
        {!isPlaying ? (
          <div className="relative aspect-video cursor-pointer group" onClick={() => setIsPlaying(true)}>
            {/* 渐变背景封面 */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f4ddc5] via-[#e8c18e] to-[#d4a574] flex items-center justify-center">
              {/* 播放按钮 */}
              <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                <Play size={40} className="text-[#8b6f47] ml-1" />
              </div>
            </div>
            
            {/* 标题和信息 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="text-left">
                <p className="text-base font-bold text-white">🐱 小豆腐晒太阳</p>
                <p className="text-xs text-white/80 mt-1">点击播放视频 · 5 秒 · 720p</p>
              </div>
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
