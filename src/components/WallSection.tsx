"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Music, Book, MessageCircle, Plus, X, Send } from "lucide-react";
import messagesData from "@/data/wall-messages.json";

type MessageType = "blessing" | "music" | "book" | "question";

interface Message {
  id: number;
  type: MessageType;
  nickname: string;
  content: string;
  emoji: string;
  createdAt: string;
  color: string;
}

const typeOptions = [
  { value: "blessing", label: "送祝福", emoji: "💕", icon: Heart, color: "from-[#f8e5e2] to-[#f4ddc5]" },
  { value: "music", label: "推荐音乐", emoji: "🎵", icon: Music, color: "from-[#eef4f8] to-[#d9e5ef]" },
  { value: "book", label: "推荐书籍", emoji: "📖", icon: Book, color: "from-[#e8f4e8] to-[#d4e8d4]" },
  { value: "question", label: "提问", emoji: "💬", icon: MessageCircle, color: "from-[#f5f0e6] to-[#e8dcc3]" },
];

export default function WallSection() {
  const [messages, setMessages] = useState<Message[]>(messagesData.messages);
  const [showForm, setShowForm] = useState(false);
  const [selectedType, setSelectedType] = useState<MessageType>("blessing");
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const typeInfo = typeOptions.find(t => t.value === selectedType);
    const newMessage: Message = {
      id: Date.now(),
      type: selectedType,
      nickname: nickname || "匿名",
      content,
      emoji: typeInfo?.emoji || "💕",
      createdAt: new Date().toISOString(),
      color: typeInfo?.color || "from-[#f8e5e2] to-[#f4ddc5]",
    };
    
    setMessages([newMessage, ...messages]);
    setShowForm(false);
    setNickname("");
    setContent("");
  };

  return (
    <section className="py-12 border-t border-[#e8dcc3]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-[#8b6f47]">互动墙</h2>
          <p className="text-sm text-[#8b7d6b]">留下你的足迹，和小豆腐互动吧～</p>
        </div>

        {/* 添加留言按钮 */}
        <div className="text-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#e8c18e] to-[#d4a574] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            <Plus size={18} />
            留下足迹
          </motion.button>
        </div>

        {/* 卡片墙 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-gradient-to-br ${msg.color} rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{msg.emoji}</span>
                  <span className="text-xs font-medium text-[#8b6f47]">{msg.nickname}</span>
                </div>
                <span className="text-[9px] text-[#a89f91]">
                  {new Date(msg.createdAt).toLocaleDateString('zh-CN')}
                </span>
              </div>
              <p className="text-sm text-[#8b7d6b] leading-relaxed">{msg.content}</p>
            </motion.div>
          ))}
        </div>

        {/* 表单弹窗 */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-display font-bold text-[#8b6f47]">留下足迹</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 hover:bg-[#f5f0e6] rounded-full transition-colors"
                  >
                    <X size={20} className="text-[#8b6f47]" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* 类型选择 */}
                  <div>
                    <label className="block text-sm font-medium text-[#8b6f47] mb-2">我想</label>
                    <div className="grid grid-cols-2 gap-2">
                      {typeOptions.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setSelectedType(type.value as MessageType)}
                          className={`p-3 rounded-xl border-2 transition-all ${
                            selectedType === type.value
                              ? "border-[#e8c18e] bg-[#f5f0e6]"
                              : "border-[#e8dcc3] hover:border-[#e8c18e]"
                          }`}
                        >
                          <div className="text-center">
                            <span className="text-xl">{type.emoji}</span>
                            <p className="text-xs text-[#8b6f47] mt-1">{type.label}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 昵称 */}
                  <div>
                    <label className="block text-sm font-medium text-[#8b6f47] mb-2">
                      昵称 <span className="text-[#a89f91]">（可选）</span>
                    </label>
                    <input
                      type="text"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      placeholder="怎么称呼你？"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e8dcc3] focus:border-[#e8c18e] focus:ring-2 focus:ring-[#e8c18e]/20 outline-none transition-all"
                    />
                  </div>

                  {/* 内容 */}
                  <div>
                    <label className="block text-sm font-medium text-[#8b6f47] mb-2">
                      内容 <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="想对小豆腐说什么？"
                      rows={4}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e8dcc3] focus:border-[#e8c18e] focus:ring-2 focus:ring-[#e8c18e]/20 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* 提交按钮 */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#e8c18e] to-[#d4a574] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    发送
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
