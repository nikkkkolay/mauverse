import { create } from 'zustand';
import { api } from '../../http';

interface FetchStore {
    posts: [];
}

export const useFetch = create<FetchStore>(set => ({
    posts: [],

    getPosts: async () => {
        try {
            const response = await api.get(`/posts`);
            console.log(response);

            // set({ hasErrors: false, updateDate: response.data[0].download, loading: false });
        } catch (err) {
            // set({ hasErrors: true, loading: false, schedule: [], availableDates: [], range: {} });
        }
    },
}));
