import { SKILLS } from "./data";
import SkillButton from "./skill-button";

const SkillsAndTools = () => {
    const renderSkills = (type: string) => {
        return SKILLS
            .filter((skill) => skill.skilltype === type)
            .map((skill) => (
                <SkillButton
                    key={skill.text}
                    text={skill.text}
                    image={skill.image}
                />
            ));
    };

    return (
        <div className='min-h-auto w-full max-w-160 flex flex-col justify-start items-center px-4 pt-2 pb-12'>

            {/* Header */}
            <div className="w-full rounded-xl flex flex-col items-start gap-4 bg-white pb-6">
                <p className='font-apparel tracking-[0.3px] italic text-[#292929] section-heading-stroke-dark text-[20px] sm:text-[26px]'>
                    Skill and Tools.
                </p>
                <div className="text-[12.5px] sm:text-[13.5px] tracking-[0px] sm:tracking-[0.1px] text-gray-500 px-2">
                    <p>
                        {"These are the tools & technologies I've worked with. This list is constantly evolving as I continue to learn and build cool stuff."}
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col gap-6">
                {([
                    { label: "Languages", type: "LANGUAGE" },
                    { label: "Frameworks & Libraries", type: "FRAMEWORKS & LIBRARIES" },
                    { label: "Database", type: "DATABASE" },
                    { label: "Tools", type: "TOOLS" },
                    { label: "Cloud & Infra", type: "CLOUD INFRA" },
                ] as const).map(({ label, type }) => (
                    <div key={type} className="w-full flex flex-col gap-3">
                        <p className="font-sans font-medium tracking-[0.1px] text-neutral-500 text-[12px] sm:text-[13px] uppercase px-1">
                            {label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {renderSkills(type)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsAndTools;