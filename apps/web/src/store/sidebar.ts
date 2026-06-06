import { create } from 'zustand';

interface SidebarStoreType {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
}

export const useSidebarStore = create<SidebarStoreType>()((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    close: () => set({ isOpen: false }),
}));
