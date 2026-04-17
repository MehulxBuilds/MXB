import Image from "next/image";
import { Github } from "lucide-react";

interface ProjectCardProps {
    projectTitle: string;
    projectDescription: string;
    coverImage?: string;
    projectGithub: string;
    projectLiveUrl?: string;
}

const ProjectCard = ({
    projectTitle,
    projectDescription,
    coverImage = "project-default.png",
    projectGithub,
    projectLiveUrl,
}: ProjectCardProps) => {
    const redirectUrl = projectLiveUrl ?? projectGithub;

    return (
        <div
            onClick={() => window.open(redirectUrl, "_blank")}
            className="group w-full max-w-3xl cursor-pointer rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden flex hover:border-neutral-400 transition-all duration-200"
        >
            {/* Image */}
            <div className="relative w-[240px] shrink-0 overflow-hidden">
                <Image
                    src={`/images/${coverImage}`}
                    alt={projectTitle}
                    width={240}
                    height={160}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />

                {/* gradient overlay */}
                {/* <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-white" /> */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white/40" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-5 flex-1">
                <div className="flex flex-col gap-2">
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-neutral-700 tracking-tight">
                            {projectTitle}
                        </h3>

                        {/* GitHub button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(projectGithub, "_blank");
                            }}
                            className="p-1 rounded-md hover:bg-neutral-100 transition-colors"
                        >
                            <Github className="size-5 text-neutral-400 hover:text-neutral-800 transition-colors" />
                        </button>
                    </div>

                    {/* Description */}
                    <p className="mt-1 text-[13px] text-neutral-500 max-w-md tracking-[-0.25px] leading-relaxed">
                        {projectDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
