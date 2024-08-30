import { useEffect, useState } from 'react';
import { Button, Container, LoadingDots, NewsItem } from '../../components';
import { useFetch } from '../../store/useFetch';
import { INews } from '../../components/NewsItem/NewsItem.props';
import styles from './NewsSection.module.css';

export const NewsSection = (): JSX.Element => {
    const [slice, setSlice] = useState<INews[]>([]);
    const [newsCount, setNewsCount] = useState<number>(2);
    const { news, hasErrors, fetching, getAllNews } = useFetch(state => state);

    useEffect(() => {
        if (news.length === 0) {
            getAllNews();
        }
    }, [getAllNews]);

    useEffect(() => {
        setSlice(news.slice(0, newsCount));
    }, [news, newsCount]);

    const setMoreNews = () => {
        setNewsCount(prevCount => prevCount + 2);
    };

    return (
        <section className={styles.section}>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>Новости</span>
                </div>
                {fetching && (
                    <div className={styles.row}>
                        <h3>
                            Загрузка <LoadingDots />
                        </h3>
                    </div>
                )}
                {hasErrors && !fetching && (
                    <div className={styles.row}>
                        <h3>Ошибка на сервере попробуйте позже!</h3>
                    </div>
                )}
                {news.length === 0 && !hasErrors && !fetching && (
                    <div className={styles.row}>
                        <h3>Скоро здесь будут новости!</h3>
                    </div>
                )}
                {slice.length > 0 && !fetching && (
                    <ul className={styles.newsList}>
                        {slice.map(news => (
                            <NewsItem key={news.id} {...news} />
                        ))}
                    </ul>
                )}
                {news.length > slice.length && (
                    <Button className={styles.button} as="button" type="tertiary" onClick={setMoreNews}>
                        Ещё новости&nbsp;
                        <LoadingDots />
                    </Button>
                )}
            </Container>
        </section>
    );
};
