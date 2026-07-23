import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { homeDataItem } from './data';
import { motion } from 'motion/react';
import { MoveUpRight } from 'lucide-react';

interface SidebarViewProps {
    activeSection: string;
    onSectionClick: (id: string) => void;
    mobile?: boolean;
}

const SidebarView = ({ activeSection, onSectionClick, mobile }: SidebarViewProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        if (scrollRef.current && itemRefs.current[activeSection]) {
            const container = scrollRef.current;
            const target = itemRefs.current[activeSection];

            if (container && target) {
                const targetTop = target.offsetTop - (container.offsetHeight / 2) + (target.offsetHeight / 2);
                container.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
        }
    }, [activeSection]);

    return (
        <aside className={`relative flex flex-col bg-[#E6E6E6] p-4 border border-gray-200 overflow-hidden ${mobile ? 'w-full h-full rounded-r-4xl' : 'w-[320px] rounded-4xl h-full'}`}>
            <div ref={scrollRef} className="flex-1 w-full h-full overflow-y-auto scroll-smooth hidden-scrollbar">
                <div className="flex flex-col gap-4">
                    {
                        homeDataItem.map((item) => (
                            <motion.div
                                key={item.id}
                                ref={(el) => {
                                    itemRefs.current[item.id] = el
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}
                                onClick={() => onSectionClick(item.id)}
                                className="relative h-80 w-full rounded-4xl overflow-hidden group cursor-pointer border border-white/10 shrink-0"
                                initial={false}
                                animate={{
                                    scale: activeSection === item.id ? 1.02 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={`/images/${item.imageUrl}`}
                                    alt={item.title}
                                    fill
                                    loading="lazy"
                                    quality={70}
                                    sizes="320px"
                                    className={`object-cover transition-[filter] duration-300 ${activeSection === item.id ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                                        }`}
                                />
                                <div className="absolute bottom-0 w-full h-30 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.53)_70%)]" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                                <div className="absolute bottom-6 right-8 text-white font-semibold text-[17px] drop-shadow-md flex items-center gap-1.5">
                                    <p>{item.title}.</p>
                                    <MoveUpRight className="size-4.25 opacity-0 translate-y-1 hidden group-hover:block  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                </div>
                                {activeSection === item.id && (
                                    <div className="absolute top-6 left-6 w-2 h-2 bg-white rounded-full shadow-lg" />
                                )}
                            </motion.div>
                        ))
                    }
                </div>
            </div>

        </aside>
    )
}

export default SidebarView;
