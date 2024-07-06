import { create } from 'zustand';

interface LayoutStore {
    loading: boolean;
    reloaded: boolean;
    pathname: string;
    setLoading: () => void;
    reloadedChecker: () => void;
    setPathname: (pathname: string) => void;
}

export const useLayoutLoading = create<LayoutStore>(set => ({
    loading: false,
    reloaded: true,
    pathname: '',
    setLoading: () => {
        set({ loading: true });

        const timer = setTimeout(() => {
            set({ loading: false });
            return () => {
                clearTimeout(timer);
            };
        }, 1500);
    },
    setPathname: (pathname: string) => {
        set({ pathname: pathname });
    },
    reloadedChecker: () => {
        set({ reloaded: false });
    },
}));
