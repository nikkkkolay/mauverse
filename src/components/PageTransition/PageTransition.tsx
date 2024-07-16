import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Greetings, Title } from '..';
import { useLayoutLoading } from '../../store/useLayoutLoading';
import styles from './PageTransition.module.css';

interface Props {
    children?: JSX.Element;
}

export const PageTransition = ({ children }: Props): JSX.Element => {
    const location = useLocation();
    const { setLoading, reloadedChecker, pathname, reloaded } = useLayoutLoading(state => state);
    const mainPageReloaded = location.pathname === '/' && reloaded;

    const transition = {
        duration: 0.75,
        delay: mainPageReloaded ? 2 : 1,
        ease: [0.33, 1, 0.68, 1],
    };

    const slideVariants = {
        initial: {
            top: 0,
        },
        enter: {
            top: '-100vh',
            transition: transition,
            transitionEnd: {
                top: '100vh',
            },
        },
        exit: {
            top: 0,
            transition: transition,
        },
    };

    const slideTopVariants = {
        enter: {
            height: 0,
            transition: transition,
        },
        exit: {
            height: '10%',
            transition: transition,
        },
    };

    const slideBottomVariants = {
        initial: {
            height: '10%',
        },
        enter: {
            height: 0,
            transition: transition,
        },
        exit: {
            height: 0,
            transition: transition,
        },
    };

    useEffect(() => {
        setLoading();
        reloadedChecker();
    }, []);

    return (
        <>
            {children}
            <motion.div variants={slideVariants} initial={'initial'} animate={'enter'} exit={'exit'} className={styles.slide}>
                <motion.div variants={slideTopVariants} animate={'enter'} exit={'exit'} className={styles.slideTop} />
                <Title tag="h2" className={styles.title}>
                    {pathname}
                </Title>
                <motion.div variants={slideBottomVariants} initial={'initial'} animate={'enter'} exit={'exit'} className={styles.slideBottom} />
            </motion.div>
        </>
    );
};
