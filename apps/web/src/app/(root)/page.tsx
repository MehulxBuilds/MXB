"use client";

import { useState } from "react";
import ContentView from "@/components/home/content-view";
import SidebarView from "@/components/home/sidebar-view";

const RootPage = () => {
    const [activeSection, setActiveSection] = useState("introduction");
    const [scrollToSection, setScrollToSection] = useState<string | null>(null);

    return (
        <div className="w-full h-full flex-1 rounded-4xl flex items-stretch gap-4 overflow-hidden">
            <SidebarView
                activeSection={activeSection}
                onSectionClick={(id) => setScrollToSection(id)}
            />
            <ContentView
                setActiveSection={setActiveSection}
                scrollToSection={scrollToSection}
                onScrollComplete={() => setScrollToSection(null)}
                onSectionScroll={(id) => setScrollToSection(id)}
            />
        </div>
    )
}

export default RootPage;