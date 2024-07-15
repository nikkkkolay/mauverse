import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../../store/useFetch';
import styles from './NewsPage.module.css';

export const NewsPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { newsItem, hasErrors, getNews } = useFetch(state => state);

    useEffect(() => {
        if (params.id) getNews(params.id);
    }, [params.id]);

    useEffect(() => {
        if ((newsItem && !newsItem.active) || hasErrors) {
            navigate('/404', { replace: true });
        }
    }, [newsItem, hasErrors]);

    return (
        <>
            <div>{newsItem?.body}</div>
        </>
    );
};
