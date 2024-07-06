import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import classnames from 'classnames';

import { MenuLink, Social } from '..';
import { useSidebar } from '../../store/useSidebar';
import { routs } from '../../routs';
import styles from './Sidebar.module.css';

const transition = {
    ease: [0.76, 0, 0.24, 1],
    duration: 1,
    delay: 0.2,
};

const linkVariants = {
    hidden: (custom: number) => ({
        x: '30%',
        transition: { delay: custom * 0.2, ease: [0.76, 0, 0.24, 1], duration: 1 },
    }),
    visible: (custom: number) => ({
        x: 0,
        transition: { delay: custom * 0.2, ease: [0.76, 0, 0.24, 1], duration: 1 },
    }),
};

const roundedVariants = {
    visible: {
        width: ['30%', '0%'],
        transition: transition,
    },
    hidden: {
        width: ['0%', '30%'],
        transition: transition,
    },
};

export const Sidebar = (): JSX.Element => {
    const isOpen = useSidebar(state => state.isActive);
    const setActive = useSidebar(state => state.setActive);
    const location = useLocation();

    useEffect(() => {
        setActive(false);
    }, [location]);

    useEffect(() => {
        document.body.classList.toggle('overflow', isOpen);
    }, [isOpen]);

    return (
        <motion.div className={styles.sidebar} initial={{ x: '100%' }} animate={{ x: isOpen ? 0 : '130%' }} transition={transition}>
            <div className={styles.sidebarInner}>
                <p className={styles.nav}>lorem</p>
                <ul className={styles.routes}>
                    {routs &&
                        routs.map((rout: { path: string; name: string; id: number }) => (
                            <motion.span custom={rout.id} key={rout.id} variants={linkVariants} animate={isOpen ? 'visible' : 'hidden'}>
                                <MenuLink path={rout.path} name={rout.name} className={styles.link} />
                            </motion.span>
                        ))}
                </ul>
                <Social />
            </div>
        </motion.div>
    );
};
