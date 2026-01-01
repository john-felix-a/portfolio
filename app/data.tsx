import { ResumeData, PhotoItem, PhotoCategory, PresetItem } from "./types";

export const RESUME_DATA: ResumeData = {
  personal: {
    name: "John.",
    role: "Software Developer",
    email: "johnfelixjf@outlook.com",
    phone: "+91 8139820306",
    linkedin: "https://linkedin.com/in/john-felix-jf",
    location: "Chennai, India",
  },
  summary:
    "Experienced Software Developer with a strong background in building scalable, high-quality web applications using Next.js, Nuxt.js, React.js, and TypeScript. Proven track record of delivering projects across industries including ERP, catering, sustainability, and Hospital Management Systems. Skilled in developing apps from scratch, implementing Server-Side Rendering (SSR), and building real-time features with Socket.io. Adept at collaborating with cross-functional teams, maintaining code quality through reviews, and following agile methodologies.",
  skills: [
    "Next.js",
    "Nuxt.js",
    "Redux",
    "Material UI",
    "Ant Design",
    "Tailwind CSS",
    "CASL",
    "Node.js",
    "Express.js",
    "Socket.io",
    "SQL",
    "JavaScript",
    "TypeScript",
    "Python",
    "AWS",
    "Amazon Cognito",
    "Apache Spark",
    "Git",
  ],
  experience: [
    {
      id: "exp-1",
      role: "Software Developer",
      company: "InfoFlux",
      period: "11/2024 - Present",
      location: "Chennai, India",
      description: [
        "Leading the front-end team in building high-quality, scalable web applications.",
        "Guiding the team to deliver innovative solutions with a strong emphasis on mentorship, collaboration, and technical excellence.",
        "Ensuring code quality through comprehensive code reviews, adherence to agile practices, and continuous integration.",
        "Working on a large-scale ERP software built using Next.js, leveraging Server-Side Rendering (SSR) for optimized performance and SEO.",
      ],
    },
    {
      id: "exp-2",
      role: "Software Developer",
      company: "StaxLabs",
      period: "09/2023 - 12/2024",
      location: "Kochi, India",
      description: [
        "Developed a complete web application from scratch using Next.js for Aero—a platform designed to elevate security measures.",
        "Built a Cloud Kitchen module using Nuxt.js for Catersmith, a corporate catering marketplace.",
        "Designed and implemented several modules for Clenergize, a consulting firm specializing in solar energy and sustainability.",
        "Contributed to the Single Partner web application and created a real-time chat feature using Socket.io.",
      ],
    },
    {
      id: "exp-3",
      role: "Software Developer",
      company: "OneGlance Software Pvt Ltd",
      period: "06/2022 - 08/2023",
      location: "Chennai, India",
      description: [
        "Design and Developed Configurable specialty-specific case sheets according to individual style of practice.",
        "Worked in Electronic health record for about 600+ clinics spread throughout India.",
        "Designed and Developed Product Tutorial video webapp for the product.",
      ],
    },
    {
      id: "exp-4",
      role: "Frontend Developer - Freelancer",
      company: "Glory Softech",
      period: "12/2021 - 06/2022",
      location: "Idukki, India",
      description: [
        "Designed and Developed single page applications using Javascript library React.js.",
        "Designed a web app interface using Figma and Photoshop.",
      ],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Healthcare EHR Platform",
      logo: "Healthcare Software",
      period: "2022 - 2023",
      description:
        "Worked on a healthcare software platform delivering data-driven services to doctors. Designed configurable, specialty-specific case sheets and contributed to an EHR system used by 600+ clinics across India. Also developed a product tutorial video web application.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      image: "https://picsum.photos/seed/healthcare/800/600",
    },
    {
      id: "proj-2",
      title: "Enterprise ERP System",
      logo: "ERP Platform",
      period: "2024 - Present",
      description:
        "Working on a large-scale ERP system built with Next.js and Server-Side Rendering (SSR) to optimize performance and SEO. Leading the front-end team, ensuring code quality through reviews, agile practices, and CI, while mentoring developers and driving scalable solutions.",
      technologies: ["Next.js", "SSR", "TypeScript", "Tailwind CSS"],
      image: "https://picsum.photos/seed/erp/800/600",
    },
    {
      id: "proj-3",
      title: "Aero – Intelligent Security Platform",
      logo: "Aero",
      period: "2023",
      description:
        "Developed a web application from scratch using Next.js for Aero, a platform focused on enhancing security through intelligent safeguards and seamless protection mechanisms.",
      technologies: ["Next.js", "Tailwind CSS"],
      image: "https://picsum.photos/seed/aero/800/600",
    },
    {
      id: "proj-4",
      title: "Catersmith – Cloud Kitchen Module",
      logo: "Catersmith",
      period: "2023",
      description:
        "Built a Cloud Kitchen module using Nuxt.js for a corporate catering marketplace, enabling streamlined office food ordering and efficient kitchen operations.",
      technologies: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
      image: "https://picsum.photos/seed/catersmith/800/600",
    },
    {
      id: "proj-5",
      title: "Clenergize – Sustainability Consulting Platform",
      logo: "Clenergize",
      period: "2023",
      description:
        "Designed and implemented multiple modules for a sustainability consulting firm specializing in solar energy, ESG, building automation, and energy efficiency solutions.",
      technologies: ["Next.js", "Tailwind CSS"],
      image: "https://picsum.photos/seed/clenergize/800/600",
    },
    // {
    //     id: "proj-1",
    //     title: "Admin Portal for Event-Tix.us",
    //     logo: 'Even-tix.us',
    //     period: "10/2024 - Present",
    //     description: "Developed a robust admin dashboard to manage events, agents, and user activities—enabling seamless oversight and control of the ticketing platform's operations.",
    //     technologies: ["Next.js", "Tailwind", "Ant Design"],
    //     image: "https://picsum.photos/seed/admin/800/600"
    // },
    {
      id: "proj-6",
      title: "Booking & Payment System",
      logo: "Event Booking",
      period: "10/2024 - Present",
      description:
        "Developed a complete event booking workflow with Stripe integration, enabling users to browse events, select tickets, complete secure checkouts, and receive instant digital access.",
      technologies: ["Next.js", "Tailwind", "Ant Design", "Stripe Integration"],
      image: "https://picsum.photos/seed/booking/800/600",
    },
  ],
  education: [
    {
      degree: "BCA, Information Technology",
      institution: "Mahatma Gandhi University",
      period: "01/2018 - 01/2021",
    },
    {
      degree: "Class XII",
      institution: "PHSS Vandiperiyar",
      period: "2018",
    },
    {
      degree: "Class X",
      institution: "PHSS Vandiperiyar",
      period: "2016",
    },
  ],
};

export const PHOTO_CATEGORIES: PhotoCategory[] = [
  { id: "all", label: "All Work" },
  { id: "macro", label: "Macro" },
  { id: "nature", label: "Nature" },
  { id: "travel", label: "Travel" },
];

export const PHOTOS: PhotoItem[] = [
  {
    id: "1",
    category: "macro",
    src: "https://www.instagram.com/p/B_HFXCqnKOf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    title: "macro",
    instagramId: "B_HFXCqnKOf",
    instagramUrl: 'https://www.instagram.com/p/B_HFXCqnKOf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    exif: {
      camera: "Sony A7III",
      lens: "24-70mm GM",
      aperture: "f/2.8",
      iso: "800",
      shutter: "1/60",
    },
  },
  {
    id: "2",
    category: "nature",
    src: "https://www.instagram.com/p/CQxW1MipP7f/?utm_source=ig_web_copy_link",
    title: "macro",
    instagramId: "CQxW1MipP7f",
    instagramUrl: 'https://www.instagram.com/p/CQxW1MipP7f/?utm_source=ig_web_copy_link',
    exif: {
      camera: "Canon R5",
      lens: "85mm f/1.2",
      aperture: "f/1.4",
      iso: "200",
      shutter: "1/500",
    },
  },
  {
    id: "4",
    category: "macro",
    instagramId: "CMUQTzopMMQ",
    src: "https://www.instagram.com/p/CMUQTzopMMQ/?utm_source=ig_web_copy_link",
    title: "Macro",
    instagramUrl: "https://www.instagram.com/p/CMUQTzopMMQ/?utm_source=ig_web_copy_link",
  },
  {
    id: "5",
    category: "nature",
    instagramId: "CLG17wgJUEd",
    src: "https://www.instagram.com/p/CLG17wgJUEd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    title: "Nature",
    instagramUrl: "https://www.instagram.com/p/CLG17wgJUEd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "6",
    category: "nature",
    instagramId: "C5arSDhyGEZ",
    src: "https://www.instagram.com/p/C5arSDhyGEZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    title: "Nature",
    instagramUrl: "https://www.instagram.com/p/C5arSDhyGEZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "7",
    category: "nature",
    instagramId: "CSET_Y9JZRA",
    src: "https://www.instagram.com/p/CSET_Y9JZRA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    title: "Nature",
    instagramUrl: "https://www.instagram.com/p/CSET_Y9JZRA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "8",
    category: "travel",
    instagramId: "DGLIGkQyzC8",
    src: "https://www.instagram.com/p/DGLIGkQyzC8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    title: "Nature",
    instagramUrl: "https://www.instagram.com/p/DGLIGkQyzC8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "9",
    category: "nature",
    instagramId: "CwZNoUjSC3i",
    src: "https://www.instagram.com/p/CwZNoUjSC3i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    title: "Nature",
    instagramUrl: "https://www.instagram.com/p/CwZNoUjSC3i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "10",
    category: "travel",
    instagramId: "CvfRNmNyLBP",
    src: "https://www.instagram.com/p/CvfRNmNyLBP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    title: "Nature",
    instagramUrl: "https://www.instagram.com/p/CvfRNmNyLBP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

export const PRESETS: PresetItem[] = [
  {
    id: "p1",
    title: "Urban Moody",
    description:
      "Perfect for cityscapes and street photography. Desaturated blues and popped highlights.",
    thumbnail: "https://picsum.photos/600/400?random=10",
    price: "Free",
    formats: [".xmp", ".dng", ".cube"],
  },
  {
    id: "p2",
    title: "Cinematic Teal",
    description:
      "The classic teal and orange look for your travel photos. Adds depth and movie-like vibe.",
    thumbnail: "https://picsum.photos/600/400?random=11",
    price: "$5",
    formats: [".lrtemplate", ".xmp"],
  },
  {
    id: "p3",
    title: "B&W Contrast",
    description:
      "High contrast black and white preset for dramatic portraits and architecture.",
    thumbnail: "https://picsum.photos/600/400?random=12",
    price: "Free",
    formats: [".dng"],
  },
];
