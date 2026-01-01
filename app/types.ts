export interface ResumeData {
  personal: {
    name: string;
    role: string;
    email: string;
    phone: string;
    linkedin: string;
    location: string;
  };
  summary: string;
  skills: string[];
  experience: {
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    description: string[];
  }[];
  projects: {
    id: string;
    title: string;
    logo: string;
    period: string;
    description: string;
    technologies: string[];
    image?: string;
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
}

export interface PhotoCategory {
  id: string;
  label: string;
}

export interface PhotoItem {
  id: string;
  category: string;
  src: string;
  title: string;
  instagramId?: string;
  instagramUrl?: string;
  exif?: {
    camera: string;
    lens: string;
    aperture: string;
    iso: string;
    shutter: string;
  };
}

export interface PresetItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: string;
  formats: string[];
}
