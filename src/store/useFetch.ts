import { create } from 'zustand';
import { api } from '../../http';
import { INews } from '../components/NewsItem/NewsItem.props';
import { IInputForm } from '../components/Form/Form';

interface FetchStore {
    news: INews[] | [];
    newsItem: INews | null;
    hasErrors: boolean;
    fetching: boolean;
    mailSent: boolean;
    mailSendingError: boolean;
    getAllNews: () => void;
    getNews: (id: string) => void;
    sendEmail: (body: IInputForm) => void;
}

export const useFetch = create<FetchStore>(set => ({
    news: [],
    newsItem: null,
    hasErrors: false,
    mailSent: false,
    mailSendingError: false,
    fetching: false,

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

    getNews: async id => {
        set({ fetching: true });
        try {
            const response = await api.get(`/posts/${id}`);
            set({ newsItem: response.data, hasErrors: false, fetching: false });
        } catch {
            set({ newsItem: null, hasErrors: true, fetching: false });
        }
    },

    sendEmail: async body => {
        set({ fetching: true, mailSent: false, mailSendingError: false });
        try {
            await api.post('/send-email/', body);
            set({ mailSendingError: false, fetching: false, mailSent: true });
        } catch {
            set({ mailSendingError: true, fetching: false, mailSent: false });
        }
    },
}));
