import { Icons } from "@/components/common/icons";
import { RESUME_DATA } from "@/app/data";

export interface skillsInterface {
  name: string;
  description: string;
  icon: any;
  category: "Frontend" | "Backend" | "Database" | "Programming Languages" | "Cloud (AWS)" | "Data Engineering" | "Tools" | "Other";
}

// Map of known skills to their rich definitions
const knownSkills: Record<string, skillsInterface> = {
  // Frontend
  "Next.js": {
    name: "Next.js",
    description: "React framework for fast, SEO-optimized, production-ready web applications.",
    icon: Icons.nextjs,
    category: "Frontend",
  },
  "Nuxt.js": {
    name: "Nuxt.js",
    description: "Vue-based framework for server-rendered and static web applications.",
    icon: Icons.nuxtjs,
    category: "Frontend",
  },
  "Redux": {
    name: "Redux",
    description: "State management for handling complex frontend application data.",
    icon: Icons.redux,
    category: "Frontend",
  },
  "Material UI": {
    name: "Material UI",
    description: "Prebuilt React UI components following Material Design.",
    icon: Icons.mui,
    category: "Frontend",
  },
  "Ant Design": {
    name: "Ant Design",
    description: "Enterprise-focused UI component library for large applications.",
    icon: Icons.antdesign,
    category: "Frontend",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    icon: Icons.tailwindcss,
    category: "Frontend",
  },
  "CASL": {
    name: "CASL",
    description: "Authorization library for role- and permission-based UI access control.",
    icon: Icons.casl,
    category: "Frontend",
  },

  // Backend
  "Node.js": {
    name: "Node.js",
    description: "JavaScript runtime for building scalable backend services.",
    icon: Icons.nodejs,
    category: "Backend",
  },
  "Express.js": {
    name: "Express.js",
    description: "Minimal backend framework for RESTful APIs.",
    icon: Icons.express,
    category: "Backend",
  },
  "Socket.io": {
    name: "Socket.io",
    description: "Real-time communication for live updates and events.",
    icon: Icons.socketio,
    category: "Backend",
  },

  // Database
  "SQL": {
    name: "SQL",
    description: "Relational databases for structured and transactional data.",
    icon: Icons.mysql,
    category: "Database",
  },

  // Programming Languages
  "JavaScript": {
    name: "JavaScript",
    description: "Core language for frontend and backend web development.",
    icon: Icons.javascript,
    category: "Programming Languages",
  },
  "TypeScript": {
    name: "TypeScript",
    description: "Strongly typed JavaScript for scalable applications.",
    icon: Icons.typescript,
    category: "Programming Languages",
  },
  "Python": {
    name: "Python",
    description: "General-purpose language used for backend logic and data processing.",
    icon: Icons.python,
    category: "Programming Languages",
  },

  // Cloud (AWS)
  "AWS": {
    name: "AWS",
    description: "Cloud platform for scalable application infrastructure.",
    icon: Icons.amazonaws,
    category: "Cloud (AWS)",
  },
  "Amazon Cognito": {
    name: "Amazon Cognito",
    description: "Managed authentication and authorization service.",
    icon: Icons.cognito,
    category: "Cloud (AWS)",
  },

  // Data Engineering
  "Apache Spark": {
    name: "Apache Spark",
    description: "Distributed engine for processing large datasets.",
    icon: Icons.spark,
    category: "Data Engineering",
  },

  // Tools
  "Git": {
    name: "Git",
    description: "Version control system for source code management.",
    icon: Icons.git,
    category: "Tools",
  }
};

// Create a fallback skill object
const fallbackSkill = (name: string): skillsInterface => ({
  name,
  description: "Experienced in " + name,
  icon: Icons.check,
  category: "Other",
});

// Map user skills to rich objects
export const featuredSkills: skillsInterface[] = RESUME_DATA.skills.map(skillName => {
  const match = knownSkills[skillName];
  if (match) return match;
  return fallbackSkill(skillName);
});

export const skills = featuredSkills;
