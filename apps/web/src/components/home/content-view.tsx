import { useEffect, useRef } from 'react'
import { SmoothScroll, SmoothScrollHandle } from '../smooth-scroll';
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
    const scrollRef = useRef<SmoothScrollHandle>(null);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        if (scrollToSection && scrollRef.current) {
            const targetSection = sectionRefs.current[scrollToSection];
            if (targetSection) {
                scrollRef.current.scrollTo(targetSection.offsetTop);
                onScrollComplete();
            }
        }
    }, [scrollToSection, onScrollComplete]);

    return (
        <div className="flex-1 flex flex-col gap-4 h-full p-4 bg-[#E6E6E6] rounded-4xl border border-gray-200 overflow-hidden font-sans">
            {/* Header */}
            <Navbar onSectionScroll={onSectionScroll} />

            {/* Main Content Area */}
            <main className="flex-1 bg-white rounded-4xl border border-gray-100 overflow-hidden">
                <SmoothScroll ref={scrollRef}>

                    {/* Introduction */}
                    <motion.section
                        ref={(el: HTMLElement | null) => { sectionRefs.current["introduction"] = el }}
                        onViewportEnter={() => setActiveSection("introduction")}
                        viewport={{ amount: 0.6 }}
                        className='min-h-auto w-full flex justify-center items-start px-4 py-12'>
                        <Introduction />
                    </motion.section>


                    {/* Skills & Tools */}
                    <motion.section
                        ref={(el: HTMLElement | null) => { sectionRefs.current["skills"] = el }}
                        onViewportEnter={() => setActiveSection("skills")}
                        viewport={{ amount: 0.6 }}
                        className='min-h-auto w-full flex justify-center items-center'>
                        <SkillsAndTools />
                    </motion.section>

                    {/* Experience */}
                    <motion.section
                        ref={(el: HTMLElement | null) => { sectionRefs.current["experience"] = el }}
                        onViewportEnter={() => setActiveSection("experience")}
                        viewport={{ amount: 0.6 }}
                        className='min-h-auto w-full flex justify-center items-center'>
                        <Experience />
                    </motion.section>

                    {/* Projects */}
                    <motion.section
                        ref={(el: HTMLElement | null) => { sectionRefs.current["projects"] = el }}
                        onViewportEnter={() => setActiveSection("projects")}
                        viewport={{ amount: 0.2 }}
                        className='min-h-auto w-full flex justify-center items-center'>
                        <Projects />
                    </motion.section>

                    {/* Contacts */}
                    <motion.section
                        ref={(el: HTMLElement | null) => { sectionRefs.current["contacts"] = el }}
                        onViewportEnter={() => setActiveSection("contacts")}
                        viewport={{ amount: 0.6 }}
                        className='min-h-auto w-full flex justify-center items-center'>
                        <ContactFooter />
                    </motion.section>

                </SmoothScroll>
            </main>
        </div>
    )
};

export default ContentView;
