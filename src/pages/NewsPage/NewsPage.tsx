import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JsxParser from 'react-jsx-parser';
import { format } from '@formkit/tempo';
import { Container, Title, Fancybox, BigButtonRow, LoadingDots, MetaHelmet } from '../../components';
import { useFetch } from '../../store/useFetch';
import styles from './NewsPage.module.css';

export const NewsPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { newsItem, hasErrors, fetching, getNews } = useFetch(state => state);

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
            {newsItem && <MetaHelmet title={`MAUverse | ${newsItem.title}`} />}
            <section className={styles.news}>
                <Container
                    className={styles.header}
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                    {!fetching ? (
                        <>
                            <Title tag="h1">{newsItem?.title}</Title>
                            <BigButtonRow stripe className={styles.buttonRow}>
                                <div className={styles.decoration}>{newsItem && format(newsItem.published_at, 'D MMMM, YYYY г.')}</div>
                            </BigButtonRow>
                        </>
                    ) : (
                        <h2>
                            Загрузка <LoadingDots />
                        </h2>
                    )}
                </Container>

                <Container
                    className={styles.content}
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                    {newsItem?.pictures && <img className={styles.firstImage} src={newsItem?.pictures[0].src} alt={newsItem?.title} />}
                    <JsxParser jsx={newsItem?.body} />
                    {newsItem?.pictures && (
                        <Fancybox>
                            <div className={styles.images}>
                                {newsItem?.pictures?.map((image, index) => {
                                    if (index !== 0) {
                                        return (
                                            <a data-fancybox="gallery" href={image.src} key={image.title}>
                                                <img src={image.src} />
                                            </a>
                                        );
                                    }
                                })}
                            </div>
                        </Fancybox>
                    )}
                </Container>
            </section>
        </>
    );
};
