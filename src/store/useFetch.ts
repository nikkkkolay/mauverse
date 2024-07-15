import { create } from 'zustand';
import { api } from '../../http';
import { INews } from '../components/NewsItem/NewsItem.props';

interface FetchStore {
    news: INews[] | [];
    hasErrors: boolean;
    fetching: boolean;
    getNews: () => void;
}

export const useFetch = create<FetchStore>(set => ({
    news: [],
    hasErrors: false,
    fetching: true,

    getNews: async () => {
        set({ fetching: true });
        try {
            const response = await api.get(`/posts?active_ne=false`);

            const sortData = response.data.sort((a: INews, b: INews) => new Date(b.published_at).valueOf() - new Date(a.published_at).valueOf());

            set({ news: sortData, hasErrors: false, fetching: false });
        } catch {
            set({ news: [], hasErrors: true, fetching: false });
        }
    },
}));
