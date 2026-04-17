import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProjectTabsType } from '@/types';

interface ProjectStoreType {
    tab: ProjectTabsType;
    setTab: (newTab: ProjectTabsType) => void;
};

export const useProjectTabStore = create<ProjectStoreType>()(
    persist(
        (set) => ({
            tab: 'dev',
            setTab: (newTab) => set({ tab: newTab }),
        }),
        {
            name: 'project-tab', // key in localStorage
        }
    )
);