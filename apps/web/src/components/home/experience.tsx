import ExperienceCard from './experience-card';

const Experience = () => {
    return (
        <div className='min-h-auto w-160 flex flex-col justify-start items-center px-4 py-2'>
            <div className="w-full rounded-xl flex items-center gap-4 bg-white pb-6">
                <p className='font-apparel tracking-[0.3px] italic text-[#292929] section-heading-stroke-dark text-[26px]'>Experience.</p>
            </div>

            <ExperienceCard
                companyName='Tejas'
                country='India'
                startDate='Feb 2026'
                endDate='Now'
                role='Full Stack Developer'
                workRole='Intern'
                workType='Hybrid'
                companyImage='tejas-logo.png'
                points1='Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.'
                points2='Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.'
            />
            <div className="my-2 border-t border-dashed border-neutral-300 w-full" />
            <ExperienceCard
                companyName='Tejas'
                country='India'
                startDate='Feb 2026'
                endDate='Now'
                role='Full Stack Developer'
                workRole='Intern'
                workType='Hybrid'
                companyImage='tejas-logo.png'
                points1='Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.'
                points2='Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.'
            />
            <div className="my-2 border-t border-dashed border-neutral-300 w-full" />
            <ExperienceCard
                companyName='Tejas'
                country='India'
                startDate='Feb 2026'
                endDate='Now'
                role='Full Stack Developer'
                workRole='Intern'
                workType='Hybrid'
                companyImage='tejas-logo.png'
                points1='Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.'
                points2='Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.'
            />
        </div>
    )
};

export default Experience;