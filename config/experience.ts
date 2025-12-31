import { RESUME_DATA } from "@/app/data";
import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: string[]; // Changed from ValidSkills[] to string[] to accommodate broader skills
  companyUrl?: string;
  logo?: string;
}

const parseDate = (dateStr: string): Date | "Present" => {
  if (dateStr.toLowerCase() === "present") return "Present";
  // Format: "11/2024" or "2018"
  if (dateStr.includes("/")) {
    const [month, year] = dateStr.split("/");
    return new Date(parseInt(year), parseInt(month) - 1);
  }
  return new Date(parseInt(dateStr), 0); // Default to Jan if only year
};

const getStartEndDate = (period: string) => {
  const parts = period.split(" - ");
  const start = parseDate(parts[0]);
  const end = parts.length > 1 ? parseDate(parts[1]) : "Present";
  return { startDate: start as Date, endDate: end };
};

export const experiences: ExperienceInterface[] = RESUME_DATA.experience.map(exp => {
  const { startDate, endDate } = getStartEndDate(exp.period);
  return {
    id: exp.id,
    position: exp.role,
    company: exp.company,
    location: exp.location,
    startDate,
    endDate,
    description: exp.description,
    achievements: [], // User data maps to description, preserving it there.
    skills: [], // User data doesn't specify skills per experience, leaving empty to avoid guessing
    companyUrl: "", // Not provided
    logo: "", // Not provided, component should handle empty or we can add a placeholder logic in component if needed
  };
});
