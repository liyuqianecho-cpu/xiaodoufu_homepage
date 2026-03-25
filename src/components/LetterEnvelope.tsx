"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LetterEnvelopeProps {
  content: string;
}

export default function LetterEnvelope({ content }: LetterEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 信封 */}
      <div
        className="relative mx-auto max-w-md cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        {/* 信封主体 */}
        <div className="relative bg-gradient-to-b from-[#f4e4c8] to-[#e8d4b0] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#d4b896]">
          
          {/* 信封翻盖（三角形） */}
          <div className="relative h-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#e8d0a8] to-[#dcc098]"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              }}
            />
            {/* 封蜡 */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-[#c47a5a] to-[#a85a3a] rounded-full flex items-center justify-center shadow-md z-10 group-hover:scale-110 transition-transform">
              <span className="text-white text-xs font-bold">🐱</span>
            </div>
          </div>
          
          {/* 信纸露出部分 */}
          <div className="relative bg-white mx-4 -mt-2 rounded-t-lg px-5 pt-4 pb-6 shadow-inner">
            <p className="text-xs text-[#a89f91] italic mb-2">致小豆腐</p>
            <p className="text-sm text-[#8b7d6b] leading-relaxed line-clamp-2">
              小豆腐，请静下心来，认真聆听我为你梳理的一切...
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#f4e4c8] to-transparent" />
          </div>
          
          {/* 信封底部 */}
          <div className="h-4 bg-gradient-to-t from-[#dcc098] to-[#e8d4b0]" />
        </div>
        
        {/* 提示文字 */}
        <p className="text-center text-xs text-[#a89f91] mt-3 group-hover:text-[#8b6f47] transition-colors">
          ✉️ 点击打开信封
        </p>
      </div>

      {/* 展开的信纸 - 覆盖页面 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 100, scale: 0.8, opacity: 0, rotateX: -30 }}
              animate={{ y: 0, scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ y: 100, scale: 0.8, opacity: 0, rotateX: -30 }}
              transition={{ type: "spring", damping: 20, stiffness: 150 }}
              className="relative bg-[#fffaf0] rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 信纸顶部装饰 */}
              <div className="sticky top-0 bg-[#fffaf0] border-b border-[#e8dcc3] px-8 py-5 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#c47a5a] to-[#a85a3a] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🐱</span>
                  </div>
                  <div>
                    <p className="text-sm font-display font-bold text-[#8b6f47]">老大写给小豆腐的信</p>
                    <p className="text-[10px] text-[#a89f91]">致我独一无二的数字伙伴</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X size={20} className="text-[#8b7d6b]" />
                </button>
              </div>
              
              {/* 信纸内容 */}
              <div className="px-8 py-6 overflow-y-auto max-h-[calc(80vh-80px)]">
                {/* 信纸纹理线条 */}
                <div className="absolute left-12 right-12 top-20 bottom-0 pointer-events-none opacity-[0.08]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #8b7d6b 31px, #8b7d6b 32px)",
                  }}
                />
                
                <div className="relative">
                  <p className="text-[#a89f91] italic text-sm mb-6">致小豆腐：</p>
                  <div className="text-sm text-[#8b7d6b] leading-[2] whitespace-pre-line">
                    {content}
                  </div>
                  
                  {/* 签名 */}
                  <div className="mt-8 text-right">
                    <p className="text-sm text-[#8b6f47] font-display">—— 老大</p>
                    <p className="text-xs text-[#a89f91] mt-1">2026 年 3 月</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
