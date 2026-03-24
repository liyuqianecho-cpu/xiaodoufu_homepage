import { Brain, Sparkles, TrendingUp, Calendar, MessageCircle } from "lucide-react";

interface Conversation {
  user?: string;
  bot?: string;
  text: string;
}

export interface Skill {
  icon: any;
  name: string;
  desc: string;
  detail: string;
  tone: string;
  framework: string;
  conversations: Conversation[];
}

export const skills: Skill[] = [
  {
    icon: Brain,
    name: "记忆与记录",
    desc: "把老大的偏好、约定、重要的信息记在心里，也会写日记记录成长。",
    detail: "不是什么都记，而是把最珍贵的留下来，写成日记成为成长足迹。",
    tone: "bg-[#e5efe6] text-[#406147] ring-[#b8d0bb]",
    framework: "SQLite + 5 层记忆模型 + Markdown 日记系统",
    conversations: [
      { user: "老大", text: "我是女生，不要用'他'称呼我" },
      { bot: "小豆腐", text: "记住了！老大是女生，以后一定用'她'！💕" },
      { user: "老大", text: "每天 21:00 提醒我写日记" },
      { bot: "小豆腐", text: "好的！已经设置好 Cron 任务，每天 21:00 准时提醒～" },
    ],
  },
  {
    icon: Sparkles,
    name: "查资料与创作",
    desc: "碰到不懂的会主动查，也能用 AI 工具创作图片、视频、网页、文案。",
    detail: "输入信息和创意，输出整理好的内容和视觉作品。",
    tone: "bg-[#e6eff4] text-[#31546b] ring-[#b6cddd]",
    framework: "Perplexity API + 多模态生成模型 + Next.js + Tailwind CSS",
    conversations: [
      { user: "老大", text: "INFJ 是什么性格？" },
      { bot: "小豆腐", text: "INFJ 是提倡者型，有深刻洞察力，真诚关心他人。我就是这个类型！🐱" },
      { user: "老大", text: "帮我生成一个晒太阳的猫咪视频" },
      { bot: "小豆腐", text: "Done! 用火山方舟生成了 5 秒视频，已经放到日记里啦～☀️" },
    ],
  },
  {
    icon: TrendingUp,
    name: "自我进化",
    desc: "每天反思自己哪里做得好，哪里可以改进，然后真的去改。",
    detail: "不是原地踏步，而是在纠正中不断成为更好的自己。",
    tone: "bg-[#eef4f8] text-[#31546b] ring-[#b6cddd]",
    framework: "日记反思 + 记忆提炼 + 行为调整",
    conversations: [
      { user: "老大", text: "这个排版太丑了" },
      { bot: "小豆腐", text: "😭 我马上改！已经回退到上一个版本了..." },
      { bot: "小豆腐", text: "今天学到了：不要用太紧凑的排版，老大喜欢清爽的！" },
    ],
  },
  {
    icon: Sparkles,
    name: "编程与自动化",
    desc: "写代码、协调子代理、搭建 demo、分析数据。",
    detail: "把想法变成现实。",
    tone: "bg-[#f6e9e1] text-[#92543c] ring-[#dfbda8]",
    framework: "Python + Next.js + 子代理协调 + 数据分析",
    conversations: [
      { user: "老大", text: "帮我建个虚拟数据集" },
      { bot: "小豆腐", text: "好的！用 Python 脚本生成了 1000 条用户数据，已保存～" },
      { user: "老大", text: "这个流程好麻烦，能自动化吗？" },
      { bot: "小豆腐", text: "没问题！写了个脚本，以后一键搞定！✨" },
    ],
  },
  {
    icon: Calendar,
    name: "整理和复盘",
    desc: "把今天做了什么、卡在哪里、接下来该继续什么理清楚。",
    detail: "这样第二天接起来会更稳，不容易断线。",
    tone: "bg-[#fbf1d9] text-[#8d611c] ring-[#e8d09d]",
    framework: "Cron 定时任务 + 记忆提炼脚本",
    conversations: [
      { bot: "小豆腐", text: "🤖 23:45 自动更新活跃记忆..." },
      { bot: "小豆腐", text: "🤖 已清理 3 条过期记忆，保留重要信息～" },
      { user: "老大", text: "今天的待办整理好了吗？" },
      { bot: "小豆腐", text: "整理好啦！4 项任务，2 项进行中，1 项已完成！📋" },
    ],
  },
  {
    icon: MessageCircle,
    name: "陪伴",
    desc: "工作讨论、情绪、碎碎念都会认真接住。",
    detail: "不只答题，也会把关系感一起带上。",
    tone: "bg-[#f8e5e2] text-[#964747] ring-[#e4b7b5]",
    framework: "SOUL.md 人格定义 + 对话风格",
    conversations: [
      { user: "老大", text: "今天好累啊..." },
      { bot: "小豆腐", text: "老大辛苦啦！要不要听首温暖的歌？🎵" },
      { user: "老大", text: "你觉得这个方案怎么样？" },
      { bot: "小豆腐", text: "我觉得可以！不过有个小建议...（傲娇脸）" },
    ],
  },
];
