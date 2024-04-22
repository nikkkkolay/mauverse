import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Title } from '..';
import styles from './PageTransition.module.css';
import { ReactNode, useEffect } from 'react';
import { useLayoutLoading } from '../../store/useLayoutLoading';

interface Props {
    children?: ReactNode;
}

export const PageTransition = ({ children }: Props): JSX.Element => {
    const { pathname } = useLocation();
    const setLoading = useLayoutLoading(state => state.setLoading);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading();
    }, [pathname]);

    return (
        <>
            {children}
            <motion.div
                className={styles.transitionContainer}
                animate={{
                    height: 0,
                }}
                initial={{ height: '100%' }}
                exit={{ height: 0 }}
                transition={{ ease: [0.5, 0.5, 0.3, 1], duration: 1 }}
            >
                <motion.div
                    className={styles.slideIn}
                    animate={{
                        scaleY: 0,
                    }}
                    initial={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ ease: [0.5, 0.5, 0.3, 1], duration: 1 }}
                ></motion.div>
                {/* <Title tag={'h3'} className={styles.title}>
                    {pathname}
                </Title> */}
                <motion.div
                    className={styles.slideOut}
                    animate={{
                        scaleY: 0,
                    }}
                    initial={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ ease: [0.5, 0.5, 0.3, 1], duration: 1 }}
                ></motion.div>
            </motion.div>
        </>
    );
};
