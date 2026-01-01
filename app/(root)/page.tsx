import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { ParallaxSection } from "@/components/common/parallax-section";
import { AnimatedText } from "@/components/common/animated-text";
import { TypewriterText } from "@/components/common/typewriter-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { PhotographyGrid } from "@/components/photography/photography-grid";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsSection from "@/components/skills/skills-section";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { PHOTOS } from "@/app/data";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.png";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description: `${pagesConfig.home.metadata.description} built with Next.js.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 min-h-[100dvh] flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-2 text-center mt-0 md:-mt-20">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="rounded-full mb-6 h-auto md:mb-8 w-[70%] max-w-[20rem] border-b-[1px] border-primary"
            alt="John Felix - Full Stack Developer Portfolio"
            priority
          />
          <TypewriterText
            text="John Felix"
            delay={0.2}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2"
            speed={150}
          />
          <AnimatedText
            as="div"
            delay={0.4}
            className="font-heading text-lg sm:text-xl md:text-2xl lg:text-2xl text-muted-foreground"
          >
            Software developer
          </AnimatedText>
          <div className="mt-8 max-w-[42rem] text-center">
            <p className="text-lg sm:text-xl font-light italic tracking-wide">
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Lazy mind, smart craft.
              </span>
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"https://github.com/john-felix-a"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View John's GitHub profile"
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="Contact John"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Contact
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10" />
          </AnimatedText>
        </div>
      </section>
      <ParallaxSection
        className="container space-y-6 bg-muted py-10"
        id="skills"
        depth={20}
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center pb-5">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-4xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:leading-7 mb-8"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsSection />
        <AnimatedText delay={0.4} className="flex justify-center mt-6">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Skills
            </Button>
          </Link>
        </AnimatedText>
      </ParallaxSection>
      <ParallaxSection
        className="container space-y-6 py-10 my-14"
        id="projects"
        depth={40}
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center pb-5">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-4xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:leading-7 mb-8"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredProjects.map((exp, index) => (
            <div key={exp.id}>
              <ProjectCard project={exp} />
            </div>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center mt-4">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </ParallaxSection>
      <ParallaxSection
        className="container space-y-6 bg-muted py-10 my-14"
        id="photography"
        depth={60}
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center pb-5">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-4xl"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:leading-7 mb-8"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <div className="mx-auto justify-center gap-4 md:w-full">
          {/* Reuse the PhotographyGrid with a slice of photos for 'Featured' feel */}
          <PhotographyGrid photos={PHOTOS.slice(0, 3)} />
        </div>
        <AnimatedText delay={0.4} className="flex justify-center mt-4">
          <Link href="/photography">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </ParallaxSection>
      <ParallaxSection
        className="container space-y-6 py-10 my-14"
        id="experience"
        depth={80}
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center pb-5">
          <AnimatedText
            as="h2"
            className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-4xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[42rem] leading-normal text-muted-foreground sm:leading-7 mb-8"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <div key={experience.id}>
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center mt-4">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </ParallaxSection>
    </ClientPageWrapper>
  );
}
