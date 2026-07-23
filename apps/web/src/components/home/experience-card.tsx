import Image from "next/image";

const ExperienceCard = (
    {
        companyName = "Freelance",
        workRole = "Intern",
        companyImage = "work-default.png",
        country,
        workType,
        startDate,
        endDate,
        role,
        points1,
        points2,
        points3,
        points4,
        currentWorking,
    }: {
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
        points4?: string,
        currentWorking: boolean,
    }) => {
    return (
        <div className="w-full max-w-2xl rounded-2xl bg-white px-3 py-5 sm:px-5 text-neutral-900 font-sans">

            {/* Top Row */}
            <div className="flex flex-row items-center justify-between gap-2 sm:gap-0">

                {/* Left */}
                <div className="flex items-start gap-3 relative">

                    {/* Icon */}


                    <div className={`shrink-0 size-10 rounded-xl bg-neutral-100 flex items-center justify-center border border-neutral-200 ${currentWorking ? "blur-sm select-none" : ""}`}>
                        <Image
                            src={`/images/${companyImage}`}
                            height={40}
                            width={40}
                            loading="lazy"
                            alt={companyName}
                            className="h-10 w-10 rounded-xl object-cover"
                        />
                    </div>

                    {/* Title + Role */}
                    <div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p className={`font-medium text-[12.5px] sm:text-[15px] tracking-tight ${currentWorking ? "blur-sm select-none" : ""}`}>
                                {companyName}
                            </p>
                            <span className="text-[11px] px-2 py-[2px] rounded-md bg-neutral-100 text-neutral-600 border border-neutral-200">
                                <span>{workRole}</span>
                            </span>
                            {currentWorking && (
                                <span className="relative flex items-center justify-center size-2.5">
                                    <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 animate-ping" />
                                    <span className="relative inline-flex size-[6.5px] rounded-full bg-green-500" />
                                </span>
                            )}
                        </div>

                        <p className="text-[12px] sm:text-[13px] text-neutral-500 mt-[2px]">
                            {role}
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="text-right tracking-[-0.3px]">
                    <p className="text-[11px] sm:text-[13px] text-neutral-700">
                        {startDate} - {endDate}
                    </p>
                    <p className="text-[11px] sm:text-[13px] text-neutral-400">
                        {country}, {workType}
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className="flex gap-2 mt-4">

                {/* Dot */}
                <div className="mt-1.5 size-2 rounded-full bg-neutral-400 shrink-0" />

                {/* Text */}
                <p className="text-[12px] sm:text-[13px] text-neutral-600 leading-relaxed tracking-[-0.25px]">
                    {points1}
                </p>
            </div>

            {points2 && (
                <div className="flex gap-2 mt-3">

                    {/* Dot */}
                    <div className="mt-1.5 size-2 rounded-full bg-neutral-400 shrink-0" />

                    {/* Text */}
                    <p className="text-[12px] sm:text-[13px] text-neutral-600 leading-relaxed tracking-[-0.25px]">
                        {points2}
                    </p>
                </div>
            )}

            {points3 && (
                <div className="flex gap-2 mt-3">

                    {/* Dot */}
                    <div className="mt-1.5 size-2 rounded-full bg-neutral-400 shrink-0" />

                    {/* Text */}
                    <p className="text-[13px] text-neutral-600 leading-relaxed tracking-[-0.25px]">
                        {points3}
                    </p>
                </div>
            )}

            {points4 && (
                <div className="flex gap-2 mt-3">

                    {/* Dot */}
                    <div className="mt-1.5 size-2 rounded-full bg-neutral-400 shrink-0" />

                    {/* Text */}
                    <p className="text-[13px] text-neutral-600 leading-relaxed tracking-[-0.25px]">
                        {points4}
                    </p>
                </div>
            )}

        </div>
    )
};

export default ExperienceCard;