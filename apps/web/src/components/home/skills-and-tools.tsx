import { LinkedInLogo } from "./data/svg-logo";
import SkillButton from "./skill-button";

const SkillsAndTools = () => {
    return (
        <div className='min-h-auto w-160 flex flex-col justify-start items-center px-4 pt-2 pb-12'>
            <div className="w-full rounded-xl flex flex-col items-start gap-4 bg-white pb-6">
                <p className='font-apparel tracking-[0.3px] italic text-[#292929] section-heading-stroke-dark text-[26px]'>Skill and Tools.</p>
                <div className="text-[13.5px] tracking-[0.1px] text-gray-500 px-2">
                    <p>{"These are the tools & technologies I've worked with. This list is constantly evolving as I continue to learn and built cool shits."}</p>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-8">
                <div className="w-full rounded-xl flex flex-col items-start gap-4 bg-white px-6">

                    <div className="w-full rounded-xl flex flex-col items-start gap-2 bg-white pb-2">
                        <p className='font-sans font-semibold tracking-[-0.6px] text-[#626262] text-[18px]'>Languages.</p>
                        <div className="border-t border-dashed border-neutral-300 w-full" />
                    </div>

                    <div className="grid grid-cols-4 gap-[10px] max-w-160">
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                    </div>
                </div>
                <div className="w-full rounded-xl flex flex-col items-start gap-4 bg-white px-6">

                    <div className="w-full rounded-xl flex flex-col items-start gap-2 bg-white pb-2">
                        <p className='font-sans font-semibold tracking-[-0.6px] text-[#626262] text-[18px]'>Languages.</p>
                        <div className="border-t border-dashed border-neutral-300 w-full" />
                    </div>

                    <div className="grid grid-cols-4 gap-[10px] max-w-160">
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                    </div>
                </div>
                <div className="w-full rounded-xl flex flex-col items-start gap-4 bg-white px-6">

                    <div className="w-full rounded-xl flex flex-col items-start gap-2 bg-white pb-2">
                        <p className='font-sans font-semibold tracking-[-0.6px] text-[#626262] text-[18px]'>Languages.</p>
                        <div className="border-t border-dashed border-neutral-300 w-full" />
                    </div>

                    <div className="grid grid-cols-4 gap-[10px] max-w-160">
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                    </div>
                </div>
                <div className="w-full rounded-xl flex flex-col items-start gap-4 bg-white px-6">

                    <div className="w-full rounded-xl flex flex-col items-start gap-2 bg-white pb-2">
                        <p className='font-sans font-semibold tracking-[-0.6px] text-[#626262] text-[18px]'>Languages.</p>
                        <div className="border-t border-dashed border-neutral-300 w-full" />
                    </div>

                    <div className="grid grid-cols-4 gap-[10px] max-w-160">
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                        <SkillButton text="Express.js" svgImage={LinkedInLogo} />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default SkillsAndTools;