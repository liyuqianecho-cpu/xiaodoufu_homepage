declare module "@/data/wall-messages.json" {
  interface Message {
    id: number;
    type: "blessing" | "music" | "book" | "question";
    nickname: string;
    content: string;
    emoji: string;
    createdAt: string;
    color: string;
  }

  const data: {
    messages: Message[];
  };

  export default data;
}
