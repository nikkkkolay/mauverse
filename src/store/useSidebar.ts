import { create } from 'zustand';

interface SidebarStore {
    isActive: boolean;
    setActive: (state: boolean) => void;
}

export const useSidebar = create<SidebarStore>((set, get) => ({
    isActive: false,
    setActive: (state: boolean) => {
        set({ isActive: state });
    },
}));
