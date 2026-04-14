import ProjectCard from "./project-card";

const Projects = () => {
    return (
        <div className='min-h-auto w-160 flex flex-col justify-start items-center px-4 py-2'>
            <div className="w-full rounded-xl flex items-center gap-4 bg-white pb-10">
                <p className='font-apparel tracking-[0.3px] italic text-[#292929] section-heading-stroke-dark text-[26px]'>Work and Projects.</p>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-10">
                <ProjectCard
                    projectTitle="Elowen"
                    projectDescription="Elowen is a chill AI assistant inside Telegram—no extra apps, just fast, human-like replies right in your chat."
                    projectGithub="https://github.com/MehulxBuilds/Elowen"
                />
                
                <ProjectCard
                    projectTitle="Elowen"
                    projectDescription="Elowen is a chill AI assistant inside Telegram—no extra apps, just fast, human-like replies right in your chat."
                    projectGithub="https://github.com/MehulxBuilds/Elowen"
                />
                
                <ProjectCard
                    projectTitle="Elowen"
                    projectDescription="Elowen is a chill AI assistant inside Telegram—no extra apps, just fast, human-like replies right in your chat."
                    projectGithub="https://github.com/MehulxBuilds/Elowen"
                />
            </div>


        </div>
    )
};

export default Projects;