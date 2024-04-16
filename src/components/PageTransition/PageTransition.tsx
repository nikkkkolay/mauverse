import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Title } from '..';
import styles from './PageTransition.module.css';

interface Props {
    children: ReactNode;
    key?: string;
}

export const PageTransition = ({ children, key }: Props): JSX.Element => {
    const { pathname } = useLocation();

    return (
        <>
            <motion.div
                className={styles.preloader}
                animate={{
                    y: ['100%', '0%', '-100%'],
                }}
                transition={{ ease: [0.5, 0.5, 0.3, 1], duration: 1.5 }}
                key={key}
            >
                <Title tag={'h3'} className={styles.title}>
                    {pathname}
                </Title>
            </motion.div>
            {children}
        </>
    );
};
