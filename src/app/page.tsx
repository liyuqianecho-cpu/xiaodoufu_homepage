import HomePageClient from "@/components/HomePageClient";
import { getHomepageDiaryHighlights } from "@/lib/diaries";

export default function Home() {
  const diaryHighlights = getHomepageDiaryHighlights();

  return <HomePageClient diaryHighlights={diaryHighlights} />;
}
