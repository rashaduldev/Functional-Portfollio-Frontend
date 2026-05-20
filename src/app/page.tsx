import ProfileCard from "@/components/ProfileCard";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import SectionWrapper from "@/components/SectionWrapper";
import ScrollToTopWithProgress from "@/components/ScrollToTopWithProgress";
import { getTranslations } from "@/lib/i18n";

export default async function HomePage() {
  const { t, language, isRTL } = await getTranslations();

  return (
    <div className="bg-surface-page text-text-primary shadow-glow">
      <ScrollToTopWithProgress isRTL={isRTL} />

      <SectionWrapper>
        <div className="md:pt-36">
          <ProfileCard
            t={{ PROFILE: t.PROFILE, info: t.info }}
            language={language}
            isRTL={isRTL}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="section-container">
          <Resume
            t={{
              resume: t.resume,
              educationTitle: t.educationTitle,
              workHistoryTitle: t.workHistoryTitle,
              education: t.education,
              workHistory: t.workHistory,
            }}
            isRTL={isRTL}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="section-container">
          <Skills t={t.skills} isRTL={isRTL} />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="section-container">
          <Portfolio
            title={t.portfolioTitle}
            categories={t.portfolioCategories}
            items={t.portfolioData}
            isRTL={isRTL}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="section-container">
          <Blog items={t.blog} title={t.blog_title} isRTL={isRTL} />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="section-container">
          <Pricing t={t.pricing} isRTL={isRTL} />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="section-container">
          <Contact t={t.contactForm} />
        </div>
      </SectionWrapper>
    </div>
  );
}
