import { useRef } from 'react';
import { Button, Container } from '../../components';
import { useFetch } from '../../store/useFetch';
import styles from './NewsSection.module.css';
import { NewsItem } from './../../components/NewsItem/NewsItem';

export const NewsSection = () => {
    const { posts, getPosts } = useFetch(state => state);

    const ref = useRef(null);

    return (
        <section className={styles.section}>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>Lorem</span>
                </div>
                <ul className={styles.newsList}>
                    <NewsItem />
                    <NewsItem />
                </ul>
                <Button className={styles.button} as="button" type="tertiary">
                    Lorem, ipsum
                </Button>
            </Container>
        </section>
    );
};
