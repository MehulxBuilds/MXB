import { AnimateSectionTerms, ExperienceType, HomeDataItemType, ProjectType } from "@/types";

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
        companyName: 'Tejas',
        country: 'India',
        startDate: 'Mar 2026',
        endDate: 'Now',
        role: 'Full Stack Developer',
        workRole: 'Intern',
        workType: 'Hybrid',
        companyImage: 'tejas-logo.png',
        points1: 'Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.',
        points2: 'Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.'
    },
    {
        companyName: 'Freelance',
        country: 'India',
        startDate: 'Nov 2025',
        endDate: 'Jan 2026',
        role: 'Full Stack Developer',
        workRole: 'Freelancer',
        workType: 'Remote',
        points1: 'Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.',
        points2: 'Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.'
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
        points1: 'Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.',
        points2: 'Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.'
    },
];
export const PROJECTS: ProjectType[] = [
    {
        projectTitle: "Elowen",
        projectDescription: "A Telegram-native AI assistant that understands both voice and text, delivering fast, human-like responses directly inside chats with multilingual support and seamless interaction.",
        projectGithub: "https://github.com/MehulxBuilds/Elowen",
    },
    {
        projectTitle: "Raven Claw",
        projectDescription: "An automation engine for content pipelines that handles scheduled jobs, background workers, and event-driven processing to generate and publish content across platforms at scale.",
        projectGithub: "https://github.com/MehulxBuilds/Raven-Claw",
    },
    {
        projectTitle: "Voxara",
        projectDescription: "A voice-focused AI platform designed for real-time speech interaction, enabling seamless voice input, processing, and intelligent responses for conversational experiences.",
        projectGithub: "https://github.com/MehulxBuilds/voxara",
    },
    {
        projectTitle: "Lavender",
        projectDescription: "A lightweight AI-powered tool focused on enhancing productivity and user workflows through clean design, automation, and intelligent assistance.",
        projectGithub: "https://github.com/MehulxBuilds/Lavender",
    }
];

