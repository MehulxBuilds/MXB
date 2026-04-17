"use client";

import { useProjectTabStore } from "@/store/project";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@repo/ui";

const ProjectTabs = () => {
    const { setTab } = useProjectTabStore();
    return (
        <Tabs defaultValue="overview">
            <TabsList>
                <TabsTrigger value="overview" onClick={() => setTab("dev")}>Saas</TabsTrigger>
                <TabsTrigger value="analytics" onClick={() => setTab("design")}>Design</TabsTrigger>
            </TabsList>
        </Tabs>
    )
};

export default ProjectTabs;