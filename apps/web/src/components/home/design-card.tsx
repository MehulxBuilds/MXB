"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";


import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@repo/ui";

const DesignCard = ({
    item: {
        text,
        image
    }
}: {
    item: {
        text: string;
        image: string;
    }
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="group w-full cursor-pointer rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden hover:border-neutral-400 transition-all duration-200"
            >
                <div className="relative w-full h-64 overflow-hidden">
                    <Image
                        src={image}
                        alt={text}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                </div>

                <div className="px-5 py-4 flex items-center justify-between border-t border-neutral-100">
                    <p className="text-[13px] font-medium text-neutral-600 tracking-tight">{text}</p>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-widest">Design</span>
                </div>
            </div>

            <ImagePreviewModal open={open} setOpen={setOpen} image={image} text={text} />
        </>
    )
}

type Props = {
    open: boolean;
    setOpen: (val: boolean) => void;
    image: string;
    text: string;
};

export function ImagePreviewModal({ open, setOpen, image, text }: Props) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-5xl max-h-[600px] p-0 overflow-y-auto hidden-scrollbar">

                {/* Header */}
                <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between px-5 py-3 bg-white border-b border-neutral-100">
                    <DialogTitle className="text-sm font-medium text-neutral-600 tracking-tight">
                        {text}
                    </DialogTitle>

                    <DialogClose asChild>
                        <button className="flex items-center justify-center size-7 rounded-full hover:bg-neutral-100 transition-colors">
                            <X className="size-4 text-neutral-600" />
                        </button>
                    </DialogClose>
                </DialogHeader>

                {/* Image */}
                <div>
                    <Image
                        src={image}
                        alt={text}
                        width={1200}
                        height={900}
                        className="w-full h-auto"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DesignCard;
