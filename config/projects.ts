import { RESUME_DATA } from "@/app/data";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: "Personal" | "Professional";
  companyName: string;
  category: string[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: string[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = RESUME_DATA.projects.map((proj, index) => {
  // Parse period "10/2024 - Present"
  const startStr = proj.period.split(" - ")[0];
  const endStr = proj.period.split(" - ")[1];
  
  const startDate = startStr.includes("/") 
    ? new Date(parseInt(startStr.split("/")[1]), parseInt(startStr.split("/")[0]) - 1)
    : new Date();
    
  const endDate = endStr === "Present" ? new Date() : new Date(); // Approximation

  return {
    id: proj.id,
    type: "Professional", // Assumption based on context
    companyName: proj.title,
    category: ["Web Dev"], // Default category
    shortDescription: proj.description,
    techStack: proj.technologies,
    startDate,
    endDate,
    companyLogoImg: "/profile-img.png", // specific placeholder or reuse one from assets
    pagesInfoArr: [
       {
         title: "Overview",
         imgArr: [], // No images provided
         description: proj.description
       }
    ],
    descriptionDetails: {
      paragraphs: [proj.description],
      bullets: []
    }
  };
});

export const featuredProjects = Projects;
