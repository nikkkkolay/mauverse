import { create } from 'zustand';

interface SidebarStore {
    loading: boolean;
    setLoading: () => void;
}

export const useLayoutLoading = create<SidebarStore>((set, get) => ({
    loading: false,
    setLoading: () => {
        set({ loading: true });

        const timer = setTimeout(() => {
            set({ loading: false });
            return () => {
                clearTimeout(timer);
            };
        }, 1200);
    },
}));
