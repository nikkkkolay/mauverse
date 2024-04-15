import { useEffect, useLayoutEffect } from 'react';
import styles from './Preloader.module.css';
import { Title } from '..';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useLayoutLoading } from '../../store/useLayoutLoading';

export const Preloader = (): JSX.Element => {
    const loading = useLayoutLoading(state => state.loading);
    const setLoading = useLayoutLoading(state => state.setLoading);

    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setLoading();
    }, [pathname]);

    useEffect(() => {
        document.body.classList.toggle('overflow', loading);
    }, [loading]);

    return (
        <motion.div className={styles.preloader} initial={{ y: 0 }} animate={{ y: loading ? 0 : '-100%' }} transition={{ ease: [0.5, 0, 0.2, 1], duration: 0.7 }}>
            <Title tag={'h3'} className={styles.title}>
                {pathname}
            </Title>
        </motion.div>
    );
};
