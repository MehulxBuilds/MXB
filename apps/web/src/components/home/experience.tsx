import { EXPERIENCE } from './data';
import ExperienceCard from './experience-card';

const Experience = () => {
    return (
        <div className='min-h-auto w-160 flex flex-col justify-start items-center px-4 py-2'>
            <div className="w-full rounded-xl flex items-center gap-4 bg-white pb-6">
                <p className='font-apparel tracking-[0.3px] italic text-[#292929] section-heading-stroke-dark text-[26px]'>Experience.</p>
            </div>

            {EXPERIENCE.map((exp, idx) => (
                <div key={idx}>
                    <ExperienceCard
                        key={idx}
                        companyName={exp.companyName}
                        country={exp.country}
                        startDate={exp.startDate}
                        endDate={exp.endDate}
                        role={exp.role}
                        workRole={exp.workRole}
                        workType={exp.workType}
                        companyImage={exp.companyImage}
                        points1={exp.points1}
                        points2={exp.points2}
                        points3={exp.points3}
                        points4={exp.points4}
                    />
                    {idx < (EXPERIENCE.length - 1) && (
                        <div className="my-2 border-t border-dashed border-neutral-300 w-full" />
                    )}
                </div>
            ))}
        </div>
    )
};

export default Experience;