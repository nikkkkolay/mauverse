import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from '@formkit/tempo';
import { INews } from './NewsItem.props';
import styles from './NewsItem.module.css';

export const NewsItem = (props: INews): JSX.Element => {
    const ref = useRef(null);

    return (
        <li className={styles.newsItem} ref={ref}>
            <Link to={`news/${props.id.toString()}`}>
                <motion.div
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
                        <h3>{props.title}</h3>
                        <p>{props.announcement}</p>
                    </div>
                    <span className={styles.date}>{format(props.published_at, 'D MMMM, YYYY')}</span>
                </motion.div>
            </Link>
        </li>
    );
};
