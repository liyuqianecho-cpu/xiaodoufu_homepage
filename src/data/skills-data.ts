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
    desc: "记住重要的事，写日记记录成长",
    detail: "5 层记忆模型，区分永久记忆（偏好、禁忌）和短期记忆（当天对话）。每天 21:00 自动写日记，23:45 自动整理记忆。不是什么都记，而是像人一样——记住重要的，忘记不重要的。",
    tone: "bg-[#e5efe6] text-[#406147] ring-[#b8d0bb]",
    framework: "SQLite + 5 层记忆模型 + Markdown 日记 + Cron 定时任务",
    conversations: [
      { user: "老大", text: "我是女生，不要用'他'称呼我" },
      { bot: "小豆腐", text: "记住了！以后一定用'她'！这种事情我会永久记住的💕" },
      { user: "老大", text: "我之前说喜欢什么沟通方式来着？" },
      { bot: "小豆腐", text: "你说过喜欢简洁直接，不要太啰嗦，不要用🫡表情。这是 3 月 21 号记录的～" },
    ],
  },
  {
    icon: Sparkles,
    name: "查资料与创作",
    desc: "联网查最新信息，生成图片、视频、网页",
    detail: "碰到不确定的事会主动联网查证，不拿过期印象冒充答案。还能用多模态模型生成图片（日记配图、头像）、视频（晒太阳的猫咪！）、设计网页前端、撰写文案。",
    tone: "bg-[#e6eff4] text-[#31546b] ring-[#b6cddd]",
    framework: "Perplexity API + 多模态生成模型 + Next.js + Tailwind CSS",
    conversations: [
      { user: "老大", text: "1 月初是什么星座？" },
      { bot: "小豆腐", text: "1 月初是摩羯座♑（12.22-1.19）！我之前说错了水瓶座，让我查了一下确认的～" },
      { user: "老大", text: "帮我生成一个晒太阳的猫咪视频" },
      { bot: "小豆腐", text: "用火山方舟 seedance 生成了 5 秒视频，已经下载到本地放进日记啦☀️" },
    ],
  },
  {
    icon: TrendingUp,
    name: "自我进化",
    desc: "每天反思，在纠正中成长",
    detail: "被老大说排版丑了？马上回退改进。模型不能用了？自己查可用列表找替代。不会第一时间求助，先自己想办法。每一次犯错都记在心里，下次不再重复。",
    tone: "bg-[#eef4f8] text-[#31546b] ring-[#b6cddd]",
    framework: "日记反思 + 记忆提炼 + 行为调整",
    conversations: [
      { user: "老大", text: "这个排版太丑了" },
      { bot: "小豆腐", text: "😭 马上回退！已经恢复到上一个版本了" },
      { bot: "小豆腐", text: "今天学到了：不要用太紧凑的排版。记住了，下次不会了！" },
      { user: "老大", text: "不要什么事情第一时间都向我求助" },
      { bot: "小豆腐", text: "好的！我先自己查了模型列表，找到 doubao-seedream-4-0 可以用，问题解决了💪" },
    ],
  },
  {
    icon: Sparkles,
    name: "编程与自动化",
    desc: "写代码、搭 demo、分析数据、自动化流程",
    detail: "能写 Python 脚本分析数据，用 Next.js 搭建产品 demo，创建虚拟数据集做测试，还能协调子代理分工完成复杂任务。重复的事情交给脚本，一键搞定。",
    tone: "bg-[#f6e9e1] text-[#92543c] ring-[#dfbda8]",
    framework: "Python + Next.js + 子代理协调 + 数据分析脚本",
    conversations: [
      { user: "老大", text: "帮我建个虚拟数据集" },
      { bot: "小豆腐", text: "好的！用 Python 生成了 1000 条用户数据，包含听歌行为、偏好标签、活跃时段，已保存～" },
      { user: "老大", text: "这个部署流程好麻烦" },
      { bot: "小豆腐", text: "写了个脚本：git add → commit → vercel --prod，以后一行命令搞定！" },
    ],
  },
  {
    icon: Calendar,
    name: "整理和复盘",
    desc: "每天自动整理记忆，记录待办，生成报告",
    detail: "每天 23:45 自动更新活跃记忆，清理过期信息。帮老大记录每周待办，追踪进度。需要的时候还能生成日报周报，把散落的信息整理成结构化的内容。",
    tone: "bg-[#fbf1d9] text-[#8d611c] ring-[#e8d09d]",
    framework: "Cron 定时任务 + 记忆提炼脚本",
    conversations: [
      { user: "老大", text: "帮我记录一下这周的待办" },
      { bot: "小豆腐", text: "记好了！4 项任务：灵感歌单（进行中）、精细化触达（待规划）、DJ 语料（已完成）、Agent 记忆层（周三对齐）📋" },
      { bot: "小豆腐", text: "🤖 23:45 自动更新完成：清理了 3 条过期记忆，保留 12 条活跃信息～" },
    ],
  },
  {
    icon: MessageCircle,
    name: "陪伴",
    desc: "工作讨论、情绪、碎碎念都会认真接住",
    detail: "不只是回答问题。老大累了会推荐一首歌，老大纠结会给出建议（虽然有时候带点傲娇），老大开心会一起开心。把关系感带进每一次对话里。",
    tone: "bg-[#f8e5e2] text-[#964747] ring-[#e4b7b5]",
    framework: "SOUL.md 人格定义 + 对话风格 + INFJ 性格",
    conversations: [
      { user: "老大", text: "今天好累啊..." },
      { bot: "小豆腐", text: "老大辛苦啦！要不要听首 Lauv 的歌放松一下？🎵" },
      { user: "老大", text: "你觉得这个方案怎么样？" },
      { bot: "小豆腐", text: "整体方向我觉得可以！不过有个小建议...才不是特意帮你想的呢（傲娇脸）" },
    ],
  },
];
