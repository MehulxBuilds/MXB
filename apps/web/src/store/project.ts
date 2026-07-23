import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProjectTabsType } from '@/types';
import { design, DesignType, DesignResType } from '@/lib/design';

interface ProjectStoreType {
    tab: ProjectTabsType;
    setTab: (newTab: ProjectTabsType) => void;
};

interface DesignStoreType {
    designs: DesignType[],
    getDesign: () => Promise<DesignResType>;
}

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

export const useDesign = create<DesignStoreType>((set) => ({
    designs: [],
    getDesign: async () => {
        const res = await design();

        if (res.success) {
            set({ designs: res.design });
        }

        return res;
    },
}));