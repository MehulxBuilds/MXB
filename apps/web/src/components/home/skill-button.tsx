import Image from "next/image";

const SkillButton = ({
    image,
    text,
}: {
    image: string;
    text: string;
}) => {
    return (
        <div className="group flex items-center gap-2.5 px-3 py-2 rounded-lg border border-neutral-200 bg-neutral-50/60 hover:bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-200 cursor-default">
            <Image
                alt={text}
                src={image}
                height={18}
                width={18}
                unoptimized
                className="shrink-0 group-hover:scale-110 transition-transform duration-200"
            />
            <p className="text-[12.5px] font-medium tracking-[-0.2px] text-neutral-600 group-hover:text-neutral-800 transition-colors duration-200">
                {text}
            </p>
        </div>
    );
};

export default SkillButton;