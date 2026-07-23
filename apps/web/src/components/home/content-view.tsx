import { useEffect, useRef } from 'react'
import Lenis from 'lenis';
import { motion } from 'motion/react';
import Navbar from './navbar';
import Introduction from './introduction';
import ContactFooter from './contact';
import SkillsAndTools from './skills-and-tools';
import Experience from './experience';
import Projects from './projects';

interface ContentViewProps {
    setActiveSection: (id: string) => void;
    scrollToSection: string | null;
    onScrollComplete: () => void;
    onSectionScroll: (id: string) => void;
}

const ContentView = ({ setActiveSection, scrollToSection, onScrollComplete, onSectionScroll }: ContentViewProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollContentRef = useRef<HTMLDivElement>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const onScrollCompleteRef = useRef(onScrollComplete);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        onScrollCompleteRef.current = onScrollComplete;
    }, [onScrollComplete]);

    useEffect(() => {
        if (!scrollRef.current || !scrollContentRef.current) return;

        const lenis = new Lenis({
            wrapper: scrollRef.current,
            content: scrollContentRef.current,
            eventsTarget: scrollRef.current,
            autoRaf: true,
            smoothWheel: true,
            syncTouch: false,
            duration: 1.1,
            wheelMultiplier: 0.9,
            overscroll: false,
        });

        lenisRef.current = lenis;

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (!scrollToSection) return;

        const targetSection = sectionRefs.current[scrollToSection];
        if (!targetSection) return;

        const lenis = lenisRef.current;
        if (lenis) {
            lenis.scrollTo(targetSection, {
                duration: 1.1,
                onComplete: () => onScrollCompleteRef.current(),
            });
            return;
        }

        scrollRef.current?.scrollTo({ top: targetSection.offsetTop });
        onScrollCompleteRef.current();
    }, [scrollToSection]);

    return (
        <div className="flex-1 flex flex-col gap-2 lg:gap-4 h-full p-2 lg:p-4 bg-[#E6E6E6] rounded-3xl lg:rounded-4xl border border-gray-200 overflow-hidden font-sans">
            <Navbar onSectionScroll={onSectionScroll} />

            <main className="flex-1 bg-white rounded-3xl lg:rounded-4xl border border-gray-100 overflow-hidden">
                <div ref={scrollRef} className="w-full h-full overflow-y-auto hidden-scrollbar">
                    <div ref={scrollContentRef}>
                        <motion.section
                            ref={(el: HTMLElement | null) => { sectionRefs.current["introduction"] = el }}
                            onViewportEnter={() => setActiveSection("introduction")}
                            viewport={{ amount: 0.6 }}
                            className='min-h-auto w-full flex justify-center items-start px-2 sm:px-4 py-6 sm:py-12'>
                            <Introduction />
                        </motion.section>

                        <motion.section
                            ref={(el: HTMLElement | null) => { sectionRefs.current["skills"] = el }}
                            onViewportEnter={() => setActiveSection("skills")}
                            viewport={{ amount: 0.6 }}
                            className='min-h-auto w-full flex justify-center items-center'>
                            <SkillsAndTools />
                        </motion.section>

                        <motion.section
                            ref={(el: HTMLElement | null) => { sectionRefs.current["experience"] = el }}
                            onViewportEnter={() => setActiveSection("experience")}
                            viewport={{ amount: 0.6 }}
                            className='min-h-auto w-full flex justify-center items-center'>
                            <Experience />
                        </motion.section>

                        <motion.section
                            ref={(el: HTMLElement | null) => { sectionRefs.current["projects"] = el }}
                            onViewportEnter={() => setActiveSection("projects")}
                            viewport={{ amount: 0.2 }}
                            className='min-h-auto w-full flex justify-center items-center'>
                            <Projects />
                        </motion.section>

                        <motion.section
                            ref={(el: HTMLElement | null) => { sectionRefs.current["contacts"] = el }}
                            onViewportEnter={() => setActiveSection("contacts")}
                            viewport={{ amount: 0.6 }}
                            className='min-h-auto w-full flex justify-center items-center'>
                            <ContactFooter />
                        </motion.section>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default ContentView;
