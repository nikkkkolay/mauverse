import { create } from 'zustand';

interface LayoutStore {
    loading: boolean;
    pathname: string;
    setLoading: () => void;
    setPathname: (pathname: string) => void;
}

export const useLayoutLoading = create<LayoutStore>(set => ({
    loading: false,
    pathname: '',
    setLoading: () => {
        set({ loading: true });

        const timer = setTimeout(() => {
            set({ loading: false });
            return () => {
                clearTimeout(timer);
            };
        }, 1200);
    },
    setPathname: (pathname: string) => {
        set({ pathname: pathname });
    },
}));
