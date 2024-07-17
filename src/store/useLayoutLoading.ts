import { create } from 'zustand';

interface LayoutStore {
    loading: boolean;
    reloaded: boolean;
    pathname: any;
    setLoading: () => void;
    reloadedChecker: () => void;
    setPathname: (pathname: { path: string; name: string; greeting: boolean }) => void;
}

export const useLayoutLoading = create<LayoutStore>(set => ({
    loading: false,
    reloaded: true,
    pathname: null,
    setLoading: () => {
        set({ loading: true });

        const timer = setTimeout(() => {
            set({ loading: false });
            return () => {
                clearTimeout(timer);
            };
        }, 1500);
    },
    setPathname: pathname => {
        set({ pathname: pathname });
    },
    reloadedChecker: () => {
        set({ reloaded: false });
    },
}));
