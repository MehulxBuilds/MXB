import { AnimateSectionTerms, DesignSkillsType, ExperienceType, HomeDataItemType, ProjectType, SkillsType } from "@/types";

export const homeDataItem: HomeDataItemType[] = [
    {
        id: "introduction",
        title: "Introduction",
        imageUrl: "introduction.png"
    },
    {
        id: "skills",
        title: "Skills & Tools",
        imageUrl: "skills.png"
    },
    {
        id: "experience",
        title: "Experience",
        imageUrl: "experiences.png"
    },
    {
        id: "projects",
        title: "Projects",
        imageUrl: "projects.png"
    },
    {
        id: "contacts",
        title: "Contacts",
        imageUrl: "contacts.png"
    },
];

export const ROLES: AnimateSectionTerms = ["Developer", "Designer", "Engineer", "Programmer", "Vibecoder", "Human"];
export const NAMES: AnimateSectionTerms = ["Mehul Prajapati", "MehulxBuilds", "MxB"];
export const SOCIALS: AnimateSectionTerms = ["github.svg", "instagram.svg", "medium.svg", "linkedin.svg", "pinterest.svg", "twitter.svg"];

export const EXPERIENCE: ExperienceType[] = [
    {
        companyName: 'Babyyy',
        country: 'India',
        startDate: 'Mar 2026',
        endDate: 'Now',
        role: 'Full Stack Developer',
        workRole: 'Intern',
        workType: 'Hybrid',
        points1: 'Built heavy application (Microservices) with the Tech Team using PERN Stack, also did CRM Intergration',
        points2: 'Designed backend systems, APIs, Mobile Applications, manage storage workflows using AWS S3, PostgreSQL.',
        currentWorking: true
    },
    {
        companyName: 'Freelance',
        country: 'India',
        startDate: 'Nov 2025',
        endDate: 'Jan 2026',
        role: 'Full Stack Developer',
        workRole: 'Freelancer',
        workType: 'Remote',
        points1: 'Developed responsive web applications using Next.js, TypeScript, and modern UI/UX principles.',
        points2: 'Deliver SEO-optimized solutions, like scalable backend system, APIs, and managed storage, vector workflows using AWS S3',
        currentWorking: false,
    },
    {
        companyName: 'CreatiQ.Tech',
        country: 'India',
        startDate: 'July 2025',
        endDate: 'Nov 2025',
        role: 'Full Stack Developer',
        workRole: 'Intern',
        workType: 'Remote',
        companyImage: 'creatiq-tech-logo.png',
        points1: 'Delivered end-to-end client projects using the MERN stack, NextJs also used Figma for design.',
        points2: 'Built responsive, SEO-optimized applications focused on performance, engagement, and conversions.',
        currentWorking: false,
    },
];
export const PROJECTS: ProjectType[] = [
    {
        projectTitle: "Elowen",
        projectDescription: "A Telegram-native AI assistant that understands both voice and text, delivering fast, human-like responses directly inside chats with multilingual support and seamless interaction.",
        projectGithub: "https://github.com/MehulxBuilds/Elowen",
        coverImage: "elowen.png"
    },
    {
        projectTitle: "Raven Claw",
        projectDescription: "An automation engine for content pipelines that handles scheduled jobs, background workers, and event-driven processing to generate and publish content across platforms at scale.",
        projectGithub: "https://github.com/MehulxBuilds/Raven-Claw",
        coverImage: "raven-claw.png"
    },
    {
        projectTitle: "Voxara",
        projectDescription: "A voice-focused AI platform designed for real-time speech interaction, enabling seamless voice input, processing, and intelligent responses for conversational experiences.",
        projectGithub: "https://github.com/MehulxBuilds/voxara",
        coverImage: "voxara.png"
    },
    {
        projectTitle: "Lavender",
        projectDescription: "A lightweight AI-powered tool focused on enhancing productivity and user workflows through clean design, automation, and intelligent assistance.",
        projectGithub: "https://github.com/MehulxBuilds/Lavender",
        coverImage: "lavender.png"
    }
];
export const SKILLS: SkillsType[] = [
    // LANGUAGES
    { text: "C", image: "/skills/c.svg", skilltype: "LANGUAGE" },
    { text: "C++", image: "/skills/cpp.svg", skilltype: "LANGUAGE" },
    { text: "JavaScript", image: "/skills/javascript.svg", skilltype: "LANGUAGE" },
    { text: "TypeScript", image: "/skills/typescript.svg", skilltype: "LANGUAGE" },
    { text: "Python", image: "/skills/python.svg", skilltype: "LANGUAGE" },
    { text: "Rust", image: "/skills/rust.svg", skilltype: "LANGUAGE" },

    // FRAMEWORKS & LIBRARIES
    { text: "React", image: "/skills/react.png", skilltype: "FRAMEWORKS & LIBRARIES" },
    { text: "Node.js", image: "/skills/nodejs.svg", skilltype: "FRAMEWORKS & LIBRARIES" },
    { text: "Express.js", image: "/skills/express-js.svg", skilltype: "FRAMEWORKS & LIBRARIES" },
    { text: "Tailwind CSS", image: "/skills/tailwind-css.svg", skilltype: "FRAMEWORKS & LIBRARIES" },
    { text: "TanStack Query", image: "/skills/tanstack-query.png", skilltype: "FRAMEWORKS & LIBRARIES" },
    { text: "ShadCN UI", image: "/skills/shadcn-ui.png", skilltype: "FRAMEWORKS & LIBRARIES" },
    { text: "Elysia.js", image: "/skills/elysiajs.webp", skilltype: "FRAMEWORKS & LIBRARIES" },
    { text: "Next.js", image: "/skills/nextjs.png", skilltype: "FRAMEWORKS & LIBRARIES" },
    { text: "React Native", image: "/skills/react-native.png", skilltype: "FRAMEWORKS & LIBRARIES" },

    // DATABASE
    { text: "MongoDB", image: "/skills/mongodb.png", skilltype: "DATABASE" },
    { text: "PostgreSQL", image: "/skills/postgresql.png", skilltype: "DATABASE" },
    { text: "MySQL", image: "/skills/mysql.png", skilltype: "DATABASE" },
    { text: "Redis", image: "/skills/redis.png", skilltype: "DATABASE" },
    { text: "PineconeDB", image: "/skills/pinecone-db.png", skilltype: "DATABASE" },

    // CLOUD INFRA
    { text: "Docker", image: "/skills/docker.png", skilltype: "CLOUD INFRA" },
    { text: "Kafka", image: "/skills/kafka.png", skilltype: "CLOUD INFRA" },
    { text: "Supabase", image: "/skills/supabase.svg", skilltype: "CLOUD INFRA" },

    // TOOLS
    { text: "Git", image: "/skills/git.svg", skilltype: "TOOLS" },
    { text: "GitHub", image: "/skills/github.png", skilltype: "TOOLS" },
    { text: "Figma", image: "/skills/figma.svg", skilltype: "TOOLS" },
    { text: "Framer", image: "/skills/framer.png", skilltype: "TOOLS" },
    { text: "Claude", image: "/skills/claude.png", skilltype: "TOOLS" },
    { text: "Codex", image: "/skills/codex.png", skilltype: "TOOLS" },
    { text: "Cursor", image: "/skills/cursor.png", skilltype: "TOOLS" },

    // WEB BASICS
    { text: "HTML", image: "/skills/html.svg", skilltype: "LANGUAGE" },
    { text: "CSS", image: "/skills/css.svg", skilltype: "LANGUAGE" },

    // BLOCKCHAIN
    { text: "Solidity", image: "/skills/solidity.svg", skilltype: "LANGUAGE" },
];

export const DESIGNSKILLS: DesignSkillsType[] = [
    {
        text: "Cascadia Landing",
        image: "/design/cascadia-landing.png",
    },
    {
        text: "Insights Footer",
        image: "/design/insights-footer.png",
    },
    {
        text: "Kanes Footer",
        image: "/design/kanes-footer.png",
    },
    {
        text: "Kanes Landing",
        image: "/design/kanes-landing.png",
    },
    {
        text: "Portfolio Footer",
        image: "/design/portfolio-footer.png",
    },
    {
        text: "Reliquary Landing",
        image: "/design/reliquary-landing.png",
    },
    {
        text: "Sweenity Landing",
        image: "/design/sweenity-landing.png",
    },
];