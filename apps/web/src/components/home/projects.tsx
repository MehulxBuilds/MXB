"use client";

import { useProjectTabStore } from "@/store/project";
import { DESIGNSKILLS, PROJECTS } from "./data";
import ProjectCard from "./project-card";
import ProjectTabs from "./project-tabs";
import DesignCard from "./design-card";

const Projects = () => {
    const { tab } = useProjectTabStore();

    return (
        <div className='min-h-auto w-full max-w-160 flex flex-col justify-start items-center px-4 pb-2 pt-6'>
            <div className="w-full rounded-xl flex bg-white pb-10 justify-between items-center">
                <p className='font-apparel tracking-[0.3px] italic text-[#292929] section-heading-stroke-dark text-[20px] sm:text-[26px]'>Work and Projects.</p>

                <ProjectTabs />
            </div>

            {tab === "dev" && (
                <div className="w-full flex flex-col items-center justify-center gap-10">
                    {PROJECTS.map((item, idx) => (
                        <ProjectCard
                            key={idx}
                            projectTitle={item.projectTitle}
                            projectDescription={item.projectDescription}
                            projectGithub={item.projectGithub}
                            coverImage={item.coverImage}
                            projectLiveUrl={item.projectLiveUrl}
                        />
                    ))}
                </div>
            )}

            {tab === "design" && (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {DESIGNSKILLS.map((item, idx) => (
                        <DesignCard key={idx} item={item} />
                    ))}
                </div>
            )}
        </div>
    )
};

export default Projects;