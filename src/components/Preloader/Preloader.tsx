import { useEffect } from 'react';
import { Title } from '..';
import { motion, useAnimationControls } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import styles from './Preloader.module.css';

export const Preloader = (): JSX.Element => {
    const controls = useAnimationControls();
    const location = useLocation();

    const { pathname } = useLocation();

    useEffect(() => {
        controls.start({
            y: ['100%', '0%', '-100%'],
        });
    }, [location]);

    return (
        <motion.div className={styles.preloader} animate={controls} transition={{ ease: [0.5, 0.5, 0.3, 1], duration: 1.5 }}>
            <Title tag={'h3'} className={styles.title}>
                {pathname}
            </Title>
        </motion.div>
    );
};
