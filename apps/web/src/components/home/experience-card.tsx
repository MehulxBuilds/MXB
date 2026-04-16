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
        points4
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
        points4?: string
    }) => {
    return (
        <div className="w-full max-w-2xl rounded-2xl bg-white p-5 text-neutral-900 font-sans">

            {/* Top Row */}
            <div className="flex items-start justify-between">

                {/* Left */}
                <div className="flex items-start gap-3">

                    {/* Icon */}

                    <div className="shrink-0 size-10 rounded-xl bg-neutral-100 flex items-center justify-center border border-neutral-200">
                        <Image
                            src={`/images/${companyImage}`}
                            height={20}
                            width={20}
                            alt={companyName}
                            className="h-10 w-10 rounded-xl object-cover"
                            unoptimized
                        />
                    </div>

                    {/* Title + Role */}
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="font-medium text-[15px] tracking-tight">
                                {companyName}
                            </p>
                            <span className="text-[11px] px-2 py-[2px] rounded-md bg-neutral-100 text-neutral-600 border border-neutral-200">
                                {workRole}
                            </span>
                        </div>

                        <p className="text-[13px] text-neutral-500 mt-[2px]">
                            {role}
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="text-right tracking-[-0.3px]">
                    <p className="text-[13px] text-neutral-700">
                        {startDate} - {endDate}
                    </p>
                    <p className="text-[12px] text-neutral-400">
                        {country}, {workType}
                    </p>
                </div>
            </div>

            {/* Description */}
            <div className="flex gap-2 mt-4">

                {/* Dot */}
                <div className="mt-1.5 size-2 rounded-full bg-neutral-400 shrink-0" />

                {/* Text */}
                <p className="text-[13px] text-neutral-600 leading-relaxed tracking-[-0.25px]">
                    {points1}
                </p>
            </div>

            {points2 && (
                <div className="flex gap-2 mt-3">

                    {/* Dot */}
                    <div className="mt-1.5 size-2 rounded-full bg-neutral-400 shrink-0" />

                    {/* Text */}
                    <p className="text-[13px] text-neutral-600 leading-relaxed tracking-[-0.25px]">
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