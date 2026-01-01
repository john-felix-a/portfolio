import { Icons } from "@/components/common/icons";
import { RESUME_DATA } from "@/app/data";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

// Map of known skills to their rich definitions
const knownSkills: Record<string, skillsInterface> = {
  "Next.js": {
    name: "Next.js",
    description: "App Router, Server Components, SSR/SSG",
    rating: 5,
    icon: Icons.nextjs,
  },
  "React.js": {
    name: "React",
    description: "Hooks, Context, Performance Optimization",
    rating: 5,
    icon: Icons.react,
  },
  "React": {
    name: "React",
    description: "Hooks, Context, Performance Optimization",
    rating: 5,
    icon: Icons.react,
  },
  "GraphQL": {
    name: "GraphQL",
    description: "Schema design, Apollo Client/Server",
    rating: 4,
    icon: Icons.graphql,
  },
  "Nest.js": {
    name: "Nest.js",
    description: "Dependency Injection, Modules, Guards",
    rating: 4,
    icon: Icons.nestjs,
  },
  "Express.js": {
    name: "Express.js",
    description: "REST APIs, Middleware, Routing",
    rating: 5,
    icon: Icons.express,
  },
  "Node.js": {
    name: "Node.js",
    description: "Event Loop, Streams, File System",
    rating: 5,
    icon: Icons.nodejs,
  },
  "MongoDB": {
    name: "MongoDB",
    description: "Aggregation Pipeline, Indexing, Mongoose",
    rating: 5,
    icon: Icons.mongodb,
  },
  "TypeScript": {
    name: "Typescript",
    description: "Type Safety, Interfaces, Generics",
    rating: 5,
    icon: Icons.typescript,
  },
  "Javascript": {
    name: "Javascript",
    description: "ES6+, Async/Await, DOM Manipulation",
    rating: 5,
    icon: Icons.javascript,
  },
  "HTML 5": {
    name: "HTML 5",
    description: "Semantic HTML, Accessibility, SEO",
    rating: 4,
    icon: Icons.html5,
  },
  "CSS 3": {
    name: "CSS 3",
    description: "Flexbox, Grid, Animations",
    rating: 4,
    icon: Icons.css3,
  },
  "React Native": {
    name: "React Native",
    description: "Cross-platform mobile apps",
    rating: 4,
    icon: Icons.react,
  },
  "Angular": {
    name: "Angular",
    description: "TypeScript-based web application framework",
    rating: 3,
    icon: Icons.angular,
  },
  "Redux.js": {
    name: "Redux",
    description: "State Management, Thunk/Saga",
    rating: 4,
    icon: Icons.redux,
  },
  "Socket.io": {
    name: "Socket.io",
    description: "Real-time communication, WebSockets",
    rating: 3,
    icon: Icons.socketio,
  },
  "Material-UI": {
    name: "Material UI",
    description: "Component Library, Theming",
    rating: 4,
    icon: Icons.mui,
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    description: "Utility-first CSS, Responsive Design",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  "AWS": {
    name: "AWS",
    description: "EC2, S3, Lambda, Deployment",
    rating: 3,
    icon: Icons.amazonaws,
  },
  "Bootstrap": {
    name: "Bootstrap",
    description: "Responsive Grid, Components",
    rating: 2,
    icon: Icons.bootstrap,
  },
  "MySQL": {
    name: "MySQL",
    description: "Relational Database Design, SQL",
    rating: 2,
    icon: Icons.mysql,
  },
  "SQL": {
    name: "SQL",
    description: "Relational queries",
    rating: 3,
    icon: Icons.mysql, // using mysql icon for sql
  },
  "Netlify": {
    name: "Netlify",
    description: "Deployment, CI/CD, Serverless Functions",
    rating: 4,
    icon: Icons.netlify,
  },
  "Git": {
    name: "Git",
    description: "Version Control, Branching, Merging",
    rating: 5,
    icon: Icons.git, 
  }
};

// Create a fallback skill object
const fallbackSkill = (name: string): skillsInterface => ({
  name,
  description: "Experienced in " + name,
  rating: 4,
  icon: Icons.check, // Using a generic check icon if available logic fails, but check exists
});

// Map user skills to rich objects
export const featuredSkills: skillsInterface[] = RESUME_DATA.skills.map(skillName => {
  // Try exact match
  if (knownSkills[skillName]) return knownSkills[skillName];
  // Try match without case
  const lowerName = skillName.toLowerCase();
  const found = Object.values(knownSkills).find(s => s.name.toLowerCase() === lowerName);
  if (found) return found;
  
  // Handle specific aliases
  if (skillName === "Vue.js") return { name: "Vue.js", description: "Progressive JavaScript Framework", rating: 4, icon: Icons.page }; 
  if (skillName === "Nuxt.js") return { name: "Nuxt.js", description: "The Intuitive Vue Framework", rating: 4, icon: Icons.page };
  if (skillName === "Ant Design") return { name: "Ant Design", description: "UI Design Language", rating: 4, icon: Icons.retro };
  if (skillName === "Amazon Cognito") return { name: "Amazon Cognito", description: "Identity Management", rating: 3, icon: Icons.user };
  if (skillName === "Chart.js") return { name: "Chart.js", description: "Simple yet flexible charting", rating: 4, icon: Icons.media };
  if (skillName === "CASL") return { name: "CASL", description: "Isomorphic Authorization", rating: 3, icon: Icons.check };
  if (skillName === "Vuex") return { name: "Vuex", description: "State Management for Vue.js", rating: 3, icon: Icons.redux };

  return fallbackSkill(skillName);
});

export const skills = featuredSkills;
