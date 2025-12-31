import { RESUME_DATA } from "@/app/data";

export const siteConfig = {
  name: RESUME_DATA.personal.name,
  username: RESUME_DATA.personal.name,
  description: RESUME_DATA.summary,
  keywords: ["Next.js", "React", "Tailwind CSS", "Portfolio", "Software Developer"],
  url: "https://johnfelixa.com", // Placeholder URL based on name or need to ask user
  ogImage: "https://johnfelixa.com/og.jpg",
  iconIco: "/logo.png",
  logoIcon: "/logo.png",
  authorName: RESUME_DATA.personal.name,
  links: {
    twitter: "https://x.com/johnfelix1098", // Placeholder
    github: "https://github.com/johnfelix-jf", // Inferred from linkedin or just generic? User provided linkedin. 
    linkedin: RESUME_DATA.personal.linkedin,
    email: RESUME_DATA.personal.email,
  },
};
