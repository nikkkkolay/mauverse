import { useEffect, useState, useLayoutEffect } from 'react';
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

    const { setLoading, pathname } = useLayoutLoading(state => state);
    const [pageReloaded, setPageReload] = useState(false);

    const transition = {
        duration: 0.75,
        delay: pageReloaded ? 4 : 0.5,
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

        const handlePageReload = () => {
            setPageReload(true);
        };

        window.addEventListener('pagehide', handlePageReload);
        console.log('Page reloaded:', pageReloaded);

        // return () => {
        //     window.removeEventListener('pagehide', handlePageReload);
        // };
    }, []);

    return (
        <>
            {children}
            <motion.div variants={slideVariants} initial={'initial'} animate={'enter'} exit={'exit'} className={styles.slide}>
                <motion.div variants={slideTopVariants} animate={'enter'} exit={'exit'} className={styles.slideTop} />
                {location.pathname === '/' && pageReloaded ? <Greetings /> : <Title tag="h2">{pathname}</Title>}
                <motion.div variants={slideBottomVariants} initial={'initial'} animate={'enter'} exit={'exit'} className={styles.slideBottom} />
            </motion.div>
        </>
    );
};
