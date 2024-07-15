import { create } from 'zustand';
import { api } from '../../http';
import { INews } from '../components/NewsItem/NewsItem.props';

interface FetchStore {
    news: INews[] | [];
    newsItem: INews | null;
    hasErrors: boolean;
    fetching: boolean;
    getAllNews: () => void;
    getNews: (id: string) => void;
}

export const useFetch = create<FetchStore>(set => ({
    news: [],
    newsItem: null,
    hasErrors: false,
    fetching: true,

    getAllNews: async () => {
        set({ fetching: true });
        try {
            const response = await api.get('/posts?active=true');

            const sortData = response.data.sort((a: INews, b: INews) => new Date(b.published_at).valueOf() - new Date(a.published_at).valueOf());

            set({ news: sortData, hasErrors: false, fetching: false });
        } catch {
            set({ news: [], hasErrors: true, fetching: false });
        }
    },

    getNews: async (id: string) => {
        set({ fetching: true });
        try {
            const response = await api.get(`/posts/${id}`);
            set({ newsItem: response.data, hasErrors: false, fetching: false });
        } catch {
            set({ newsItem: null, hasErrors: true, fetching: false });
        }
    },
}));
