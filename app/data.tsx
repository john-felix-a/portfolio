import { ResumeData, PhotoItem, PhotoCategory, PresetItem } from './types';

export const RESUME_DATA: ResumeData = {
    personal: {
        name: "John.",
        role: "Software Developer",
        email: "johnfelixjf@outlook.com",
        phone: "+91 8139820306",
        linkedin: "https://linkedin.com/in/john-felix-jf",
        location: "Chennai, India"
    },
    summary: "Experienced Software Developer with a strong background in building scalable, high-quality web applications using Next.js, Nuxt.js, React.js, and TypeScript. Proven track record of delivering projects across industries including ERP, catering, sustainability, and Hospital Management Systems. Skilled in developing apps from scratch, implementing Server-Side Rendering (SSR), and building real-time features with Socket.io. Adept at collaborating with cross-functional teams, maintaining code quality through reviews, and following agile methodologies.",
    skills: [
        "Next.js", "Nuxt.js", "Vue.js", "Javascript", "TypeScript", "Vuex", "Redux.js",
        "Ant Design", "Material-UI", "Tailwind CSS", "Git", "Socket.io",
        "Amazon Cognito", "Chart.js", "SQL", "Express.js", "Node.js", "CASL"
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
                "Working on a large-scale ERP software built using Next.js, leveraging Server-Side Rendering (SSR) for optimized performance and SEO."
            ]
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
                "Contributed to the Single Partner web application and created a real-time chat feature using Socket.io."
            ]
        },
        {
            id: "exp-3",
            role: "Software Developer",
            company: "OneGlance Software Services Pvt Ltd",
            period: "06/2022 - 08/2023",
            location: "Chennai, India",
            description: [
                "Design and Developed Configurable specialty-specific case sheets according to individual style of practice.",
                "Worked in Electronic health record for about 600+ clinics spread throughout India.",
                "Designed and Developed Product Tutorial video webapp for the product."
            ]
        },
        {
            id: "exp-4",
            role: "Frontend Developer - Freelancer",
            company: "Glory Softech",
            period: "12/2021 - 06/2022",
            location: "Idukki, India",
            description: [
                "Designed and Developed single page applications using Javascript library React.js.",
                "Designed a web app interface using Figma and Photoshop."
            ]
        }
    ],
    projects: [
        {
            id: "proj-1",
            title: "Admin Portal for Event-Tix.us",
            period: "10/2024 - Present",
            description: "Developed a robust admin dashboard to manage events, agents, and user activities—enabling seamless oversight and control of the ticketing platform's operations.",
            technologies: ["Next.js", "Tailwind", "Ant Design"]
        },
        {
            id: "proj-2",
            title: "Booking & Payment System for Event-Tix.us",
            period: "10/2024 - Present",
            description: "Developed a complete event booking workflow with Stripe integration, enabling users to browse events, select tickets, complete secure checkouts, and receive instant digital access.",
            technologies: ["Next.js", "Tailwind", "Ant Design", "Stripe Integration"]
        }
    ],
    education: [
        {
            degree: "BCA, Information Technology",
            institution: "Mahatma Gandhi University",
            period: "01/2018 - 01/2021"
        },
        {
            degree: "Class XII",
            institution: "PHSS Vandiperiyar",
            period: "2018"
        },
        {
            degree: "Class X",
            institution: "PHSS Vandiperiyar",
            period: "2016"
        }
    ]
};

export const PHOTO_CATEGORIES: PhotoCategory[] = [
    { id: 'all', label: 'All Work' },
    { id: 'urban', label: 'Urban' },
    { id: 'nature', label: 'Nature' },
    { id: 'minimal', label: 'Minimal' },
];

export const PHOTOS: PhotoItem[] = [
    {
        id: '1',
        category: 'urban',
        src: 'https://picsum.photos/800/800?random=2',
        title: 'City Lights',
        exif: { camera: 'Sony A7III', lens: '24-70mm GM', aperture: 'f/2.8', iso: '800', shutter: '1/60' }
    },
    {
        id: '2',
        category: 'nature',
        src: 'https://picsum.photos/800/800?random=2',
        title: 'Forest Mist',
        exif: { camera: 'Canon R5', lens: '85mm f/1.2', aperture: 'f/1.4', iso: '200', shutter: '1/500' }
    },
    {
        id: '3',
        category: 'minimal',
        src: 'https://picsum.photos/800/600?random=3',
        title: 'White Space',
        exif: { camera: 'Fujifilm XT-4', lens: '35mm f/1.4', aperture: 'f/5.6', iso: '100', shutter: '1/200' }
    },
    { id: '4', category: 'urban', src: 'https://picsum.photos/800/1200?random=4', title: 'Architecture' },
    { id: '5', category: 'nature', src: 'https://picsum.photos/800/600?random=5', title: 'Ocean Breeze' },
    { id: '6', category: 'minimal', src: 'https://picsum.photos/800/800?random=6', title: 'Shadows' },
    { id: '7', category: 'urban', src: 'https://picsum.photos/800/600?random=7', title: 'Street Corner' },
    { id: '8', category: 'nature', src: 'https://picsum.photos/800/1000?random=8', title: 'Mountain High' },
    { id: '9', category: 'minimal', src: 'https://picsum.photos/800/600?random=9', title: 'Lines' },
];

export const PRESETS: PresetItem[] = [
    {
        id: 'p1',
        title: 'Urban Moody',
        description: 'Perfect for cityscapes and street photography. Desaturated blues and popped highlights.',
        thumbnail: 'https://picsum.photos/600/400?random=10',
        price: 'Free',
        formats: ['.xmp', '.dng', '.cube']
    },
    {
        id: 'p2',
        title: 'Cinematic Teal',
        description: 'The classic teal and orange look for your travel photos. Adds depth and movie-like vibe.',
        thumbnail: 'https://picsum.photos/600/400?random=11',
        price: '$5',
        formats: ['.lrtemplate', '.xmp']
    },
    {
        id: 'p3',
        title: 'B&W Contrast',
        description: 'High contrast black and white preset for dramatic portraits and architecture.',
        thumbnail: 'https://picsum.photos/600/400?random=12',
        price: 'Free',
        formats: ['.dng']
    }
];
