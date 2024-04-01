import { create } from 'zustand';

interface SidebarStore {
    isActive: boolean;
    setActive: () => void;
}

export const useSidebar = create<SidebarStore>((set, get) => ({
    isActive: false,
    setActive: () => {
        const { isActive } = get();
        set({ isActive: !isActive });
    },
}));
