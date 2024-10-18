import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Title } from '..';
import { useLayoutLoading } from '../../store/useLayoutLoading';
import styles from './PageTransition.module.css';

interface IPageTransition {
    children?: JSX.Element;
}

export const PageTransition = ({ children }: IPageTransition): JSX.Element => {
    const { setLoading, reloadedChecker, pathname, reloaded } = useLayoutLoading(state => state);

    const transition = {
        duration: 0.75,
        delay: reloaded ? 2 : 1,
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
    }, [setLoading, reloadedChecker]);

    return (
        <>
            {children}
            <motion.div variants={slideVariants} initial="initial" animate="enter" exit="exit" className={styles.slide}>
                <motion.div variants={slideTopVariants} initial="initial" animate="enter" exit="exit" className={styles.slideTop} />
                <Title tag="h2" className={styles.title}>
                    {pathname?.name}
                </Title>
                <motion.div variants={slideBottomVariants} initial="initial" animate="enter" exit="exit" className={styles.slideBottom} />
            </motion.div>
        </>
    );
};
