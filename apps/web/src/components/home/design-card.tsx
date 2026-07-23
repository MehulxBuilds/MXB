"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import type { DesignType } from "@/lib/design";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@repo/ui";

const DesignCard = ({ item }: { item: DesignType }) => {
    const [open, setOpen] = useState(false);
    const { title, description, provider, url } = item;

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="group w-full cursor-pointer rounded-2xl border-2 border-neutral-200 bg-white overflow-hidden hover:border-neutral-400 transition-all duration-200"
            >
                <div className="relative w-full h-64 overflow-hidden">
                    <Image
                        src={url}
                        alt={title}
                        fill
                        loading="lazy"
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                </div>

                <div className="px-5 py-4 flex items-center justify-between border-t border-neutral-100">
                    <div className="min-w-0">
                        <p className="text-[13px] font-medium text-neutral-600 tracking-tight truncate">
                            {title}
                        </p>
                    </div>
                    <span className="ml-4 shrink-0 text-[11px] text-neutral-400 uppercase tracking-widest">
                        {provider}
                    </span>
                </div>
            </div>

            <ImagePreviewModal open={open} setOpen={setOpen} image={url} text={title} />
        </>
    );
};

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

                <div>
                    <Image
                        src={image}
                        alt={text}
                        width={1200}
                        height={900}
                        loading="lazy"
                        quality={80}
                        className="w-full h-auto"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DesignCard;
