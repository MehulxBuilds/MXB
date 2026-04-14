import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = (
    {
        coverImage = "project-default.png",
        projectTitle,
        projectDescription,
        projectLiveUrl,
        projectGithub,
    }: {
        coverImage?: string,
        projectTitle: string,
        projectDescription: string,
        projectLiveUrl?: string,
        projectGithub: string,
    }
) => {
    return (
        <Link href={projectLiveUrl ?? projectGithub} target='_blank' className="group w-full max-w-3xl rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden flex hover:border-[#222222] transition-all duration-150 ease-in-out">

            {/* Image */}
            <div className="relative w-[240px] overflow-hidden">
                <Image
                    src={`/images/${coverImage}`}
                    alt={projectTitle}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    height={20}
                    width={20}
                    unoptimized
                />

                {/* soft fade into content */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-5 flex-1">

                <div className='flex flex-col justify-between gap-2'>
                    {/* Bottom row */}
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-[#484848] tracking-tight">
                            {projectTitle}
                        </h3>

                        <Link href={projectGithub} target='_blank'>
                            <Github className="size-5 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer" />
                        </Link>
                    </div>

                    <div className="mt-2 text-[13px] text-neutral-500 max-w-md tracking-[-0.25px]">
                        {projectDescription}
                    </div>
                </div>
            </div>
        </Link >
    )
};

export default ProjectCard;