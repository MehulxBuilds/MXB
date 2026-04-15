import { Button } from "@repo/ui";

const SkillButton = ({
    svgImage: Icon,
    text,
}: {
    svgImage: React.ElementType;
    text: string;
}) => {
    return (
<Button className="bg-white text-gray-500/90 flex items-center justify-center gap-3 hover:bg-white tracking-[-0.6px] text-[13px] font-semibold font-mono rounded-[8px] border-2 hover:border-[#a5a5a5]">
            <Icon />
            <p>{text}</p>
        </Button>
    );
};

export default SkillButton;