export interface HomeDataItemType {
    id: string;
    title: string;
    imageUrl: string;
};

export type AnimateSectionTerms = string[];

export interface ExperienceType {
    companyName: string;
    workRole: string;
    country: string;
    workType: string;
    startDate: string;
    endDate: string;
    role: string;
    companyImage?: string;
    points1: string;
    points2?: string;
    points3?: string;
    points4?: string;
    currentWorking: boolean;
};

export interface ProjectType {
    projectTitle: string;
    projectDescription: string;
    coverImage?: string;
    projectGithub: string;
    projectLiveUrl?: string;
};

type SkillsTypeChoice = "LANGUAGE" | "DATABASE" | "TOOLS" | "CLOUD INFRA" | "FRAMEWORKS & LIBRARIES";

export interface SkillsType {
    text: string;
    skilltype: SkillsTypeChoice;
    image: string;
};

export type ProjectTabsType = "dev" | "design";

export interface DesignSkillsType {
    text: string;
    image: string;
};