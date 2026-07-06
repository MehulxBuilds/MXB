"use client";

import { useState } from "react";
import ContentView from "@/components/home/content-view";
import SidebarView from "@/components/home/sidebar-view";
import { useSidebarStore } from "@/store/sidebar";

const RootPage = () => {
    const [activeSection, setActiveSection] = useState("introduction");
    const [scrollToSection, setScrollToSection] = useState<string | null>(null);
    const { isOpen, close } = useSidebarStore();

    const handleSectionClick = (id: string) => {
        setScrollToSection(id);
        close();
    };

    return (
        <div className="w-full h-full flex-1 rounded-3xl lg:rounded-4xl flex items-stretch gap-4 overflow-hidden relative">
            {/* Desktop sidebar */}
            <div className="hidden lg:flex">
                <SidebarView
                    activeSection={activeSection}
                    onSectionClick={(id) => setScrollToSection(id)}
                />
            </div>

            {/* Mobile sidebar overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/40" onClick={close} />
                    <aside className="absolute left-0 top-0 h-full w-[85%] max-w-[320px] animate-in slide-in-from-left duration-200">
                        <SidebarView
                            activeSection={activeSection}
                            onSectionClick={handleSectionClick}
                            mobile
                        />
                    </aside>
                </div>
            )}

            <ContentView
                setActiveSection={setActiveSection}
                scrollToSection={scrollToSection}
                onScrollComplete={() => setScrollToSection(null)}
                onSectionScroll={(id) => setScrollToSection(id)}
            />
        </div>
    )
};

export default RootPage;
