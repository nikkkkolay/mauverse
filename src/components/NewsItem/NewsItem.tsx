import { motion } from 'framer-motion';
import styles from './NewsItem.module.css';
import { useRef } from 'react';

export const NewsItem = () => {
    const ref = useRef(null);

    return (
        <li className={styles.newsItem} ref={ref}>
            <motion.a
                href=""
                whileHover={{
                    color: '#797979',
                    transition: { duration: 0.1 },
                }}
                initial={{ x: '5%', opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { ease: 'linear', duration: 0.3, delay: 0.3 },
                }}
            >
                <div className={styles.row}>
                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                    <p>Lorem ipsum, dolor sit amet</p>
                </div>
                <span className={styles.date}>12.01.1999</span>
            </motion.a>
        </li>
    );
};
