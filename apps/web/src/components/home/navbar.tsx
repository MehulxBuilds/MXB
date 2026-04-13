"use client";

import TextAnimation from './text-animation';
import { NAMES, ROLES } from './data';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

interface NavbarType {
    onSectionScroll: (id: string) => void;
}

const Navbar = ({ onSectionScroll }: NavbarType) => {
    return (
        <header className="bg-white rounded-2xl p-4 flex items-center justify-between border border-gray-100 px-8">
            <Link href={'/'} className='relative h-6 flex items-center overflow-hidden'>
                <TextAnimation roles={NAMES} classname="text-[18px] font-semibold text-gray-900 tracking-tight" />
            </Link>

            <div className="flex items-center gap-6 text-[15px]">
                <div className="relative h-6 flex items-center overflow-hidden px-2">
                    <TextAnimation roles={ROLES} classname="text-gray-500 font-medium tracking-tight capitalize" />
                </div>

                <div
                    onClick={() => onSectionScroll("contacts")}
                    className="flex items-center gap-1.5 font-semibold text-gray-900 hover:text-black transition-colors group cursor-pointer hover:underline"
                >
                    Let's Connect
                    <MoveUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
            </div>
        </header>
    )
};

export default Navbar;