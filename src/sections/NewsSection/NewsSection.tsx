import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button, Container } from '../../components';
import styles from './NewsSection.module.css';

export const NewsSection = () => {
    const ref = useRef(null);

    return (
        <section className={styles.section}>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>Lorem</span>
                </div>
                <ul className={styles.newsList}>
                    <li className={styles.newsItem} ref={ref}>
                        <motion.a
                            href=""
                            whileHover={{
                                x: '1%',
                                color: '#797979',
                                transition: { duration: 0.3 },
                            }}
                            initial={{ x: '5%', opacity: 0 }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: { ease: 'linear', duration: 0.3, delay: 0.1 },
                            }}
                        >
                            <div className={styles.row}>
                                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ea praesentium ex doloribus quod dolorem pariatur magnam </h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ea praesentium ex doloribus quod dolorem pariatur magnam reiciendis reprehenderit
                                    nam.
                                </p>
                            </div>
                            <span className={styles.date}>12.01.1999</span>
                        </motion.a>
                    </li>
                    <li className={styles.newsItem} ref={ref}>
                        <motion.a
                            href=""
                            whileHover={{
                                x: '0.5%',
                                color: '#797979',
                                transition: { duration: 0.1 },
                            }}
                            initial={{ x: '5%', opacity: 0 }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: { ease: 'linear', duration: 0.3, delay: 0.2 },
                            }}
                        >
                            <div className={styles.row}>
                                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                                <p>Lorem ipsum, dolor sit amet</p>
                            </div>
                            <span className={styles.date}>12.01.1999</span>
                        </motion.a>
                    </li>
                </ul>
                <Button className={styles.button} as="button" type="tertiary">
                    Lorem, ipsum
                </Button>
            </Container>
        </section>
    );
};
