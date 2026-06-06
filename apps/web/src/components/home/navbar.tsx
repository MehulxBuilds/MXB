"use client";

import TextAnimation from './text-animation';
import { NAMES, ROLES } from './data';
import { Menu, MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { useSidebarStore } from '@/store/sidebar';

interface NavbarType {
    onSectionScroll: (id: string) => void;
}

const Navbar = ({ onSectionScroll }: NavbarType) => {
    const toggle = useSidebarStore((s) => s.toggle);

    return (
        <header className="bg-white rounded-2xl p-3 lg:p-4 flex items-center justify-between border border-gray-100 px-4 lg:px-8">
            <div className="flex items-center gap-3">
                <button
                    onClick={toggle}
                    className="lg:hidden flex items-center justify-center size-7 hover:bg-neutral-100 transition-colors border border-neutral-300 rounded-full"
                >
                    <Menu className="size-[18px] text-neutral-700" />
                </button>

                <Link href={'/'} className='relative h-6 flex items-center overflow-hidden'>
                    <TextAnimation roles={NAMES} classname="text-[16px] sm:text-[18px] font-semibold text-gray-900 tracking-tight" />
                </Link>
            </div>

            <div className="flex items-center gap-4 lg:gap-6 text-[15px]">
                <div className="relative h-6 hidden sm:flex items-center overflow-hidden px-2">
                    <TextAnimation roles={ROLES} classname="text-gray-500 font-medium tracking-tight capitalize" />
                </div>

                <div
                    onClick={() => onSectionScroll("contacts")}
                    className="flex items-center gap-1.5 font-semibold text-gray-900 hover:text-black transition-colors group cursor-pointer hover:underline text-[14px] sm:text-[15px]"
                >
                    <span className="hidden sm:inline">{"Let's Connect"}</span>
                    <span className="sm:hidden">Connect</span>
                    <MoveUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
            </div>
        </header>
    )
};

export default Navbar;
