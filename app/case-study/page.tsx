import { HeroSection } from "@/components/case-study/hero-section"
import { IntroSection } from "@/components/case-study/intro-section"
import { DecisionMakersSection } from "@/components/case-study/decision-makers-section"
import { BDRRoadmapSection } from "@/components/case-study/bdr-roadmap-section"
import { TargetingSection } from "@/components/case-study/targeting-section"
import { ColdCampaignSection, KPISection } from "@/components/case-study/cold-campaign-section"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function CaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <IntroSection />
        <DecisionMakersSection />
        <BDRRoadmapSection />
        <TargetingSection />
        <ColdCampaignSection />
        <KPISection />
      </main>
      <Footer />
    </>
  )
}
