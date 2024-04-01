import { MenuLink, Social } from '..';
import { useSidebar } from '../../store/useSidebar';
import classnames from 'classnames';
import styles from './Sidebar.module.css';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export const Sidebar = (): JSX.Element => {
    const isOpen = useSidebar(state => state.isActive);
    const sidebar = useRef(null);

    return (
        <motion.div
            className={classnames(styles.sidebar, { [styles.active]: isOpen })}
            animate={{ x: isOpen ? 0 : 'calc(100% + 6vw)' }}
            transition={{ ease: [0.5, 0, 0.2, 1], duration: 0.7, delayChildren: 0.5 }}
            ref={sidebar}
        >
            <div className={styles.sidebarInner}>
                <p className={styles.nav}>Меню</p>
                <motion.ul className={styles.routes}>
                    <MenuLink path="/" name="Lorem" className={styles.link} />
                    <MenuLink path="/" name="Lorem" className={styles.link} />
                    <MenuLink path="/" name="Lorem" className={styles.link} />
                </motion.ul>
                <Social />
            </div>
        </motion.div>
    );
};
