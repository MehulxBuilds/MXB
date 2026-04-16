export interface HomeDataItemType {
    id: string;
    title: string;
    imageUrl: string;
};

export type AnimateSectionTerms = string[];

export interface ExperienceType {
    companyName: string,
    workRole: string,
    country: string,
    workType: string,
    startDate: string,
    endDate: string,
    role: string,
    companyImage?: string,
    points1: string,
    points2?: string,
    points3?: string,
    points4?: string
};

export interface ProjectType {
    projectTitle: string;
    projectDescription: string;
    coverImage?: string;
    projectGithub: string;
    projectLiveUrl?: string;
}