"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // 新视频链接（9:16 竖屏）
  const videoUrl = "https://ark-content-generation-cn-beijing.tos-cn-beijing.volces.com/doubao-seedance-1-5-pro/02177434879623200000000000000000000ffffac150c83955a71.mp4?X-Tos-Algorithm=TOS4-HMAC-SHA256&X-Tos-Credential=AKLTYWJkZTExNjA1ZDUyNDc3YzhjNTM5OGIyNjBhNDcyOTQ%2F20260324%2Fcn-beijing%2Ftos%2Frequest&X-Tos-Date=20260324T104105Z&X-Tos-Expires=86400&X-Tos-Signature=a904c4b0108a3ebd020574bd316a550e018d444c534606ee41ade2bfb538f8db&X-Tos-SignedHeaders=host";

  const handleLoadedData = () => {
    if (videoRef.current && !thumbnail) {
      videoRef.current.currentTime = 0.5; // 跳转到 0.5 秒处取帧
    }
  };

  const handleSeeked = () => {
    if (videoRef.current && !thumbnail) {
      const canvas = document.createElement("canvas");
      canvas.width = 720;
      canvas.height = 1280;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        setThumbnail(canvas.toDataURL("image/jpeg"));
      }
    }
  };

  return (
    <div className="my-8">
      {/* 隐藏的视频元素，用于生成封面 */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="hidden"
        onLoadedData={handleLoadedData}
        onSeeked={handleSeeked}
        crossOrigin="anonymous"
      />
      
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#e8dcc3] bg-white shadow-lg">
        {!isPlaying ? (
          <div className="relative aspect-[9/16] max-h-[500px] cursor-pointer group" onClick={() => setIsPlaying(true)}>
            {/* 封面图或渐变背景 */}
            {thumbnail ? (
              <img src={thumbnail} alt="视频封面" className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4ddc5] via-[#e8c18e] to-[#d4a574] flex items-center justify-center" />
            )}
            
            {/* 播放按钮 */}
            <div className="absolute inset-0 flex items-center justify-center">
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
            className="w-full aspect-[9/16] max-h-[500px] mx-auto"
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
