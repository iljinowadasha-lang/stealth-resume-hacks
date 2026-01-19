import HeroSection from "@/components/HeroSection";
import ATSSection from "@/components/ATSSection";
import KeywordsSection from "@/components/KeywordsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TipsSection from "@/components/TipsSection";
import ChecklistSection from "@/components/ChecklistSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ATSSection />
      <KeywordsSection />
      <AchievementsSection />
      <TipsSection />
      <ChecklistSection />
      <CTASection />
    </div>
  );
};

export default Index;
