"use client";

import { useProjectTabStore } from "@/store/project";
import { ProjectTabsType } from "@/types";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@repo/ui";

const ProjectTabs = () => {
    const { tab, setTab } = useProjectTabStore();

    return (
        <Tabs value={tab} onValueChange={(value) => setTab(value as typeof tab)}>
            <TabsList>
                <TabsTrigger value={"dev"}>Saas</TabsTrigger>
                <TabsTrigger value={"design"}>Design</TabsTrigger>
            </TabsList>
        </Tabs>
    )
};

export default ProjectTabs;