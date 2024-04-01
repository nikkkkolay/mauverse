import { MenuLink, Social } from '..';
import { useSidebar } from '../../store/useSidebar';
import classnames from 'classnames';
import styles from './Sidebar.module.css';
import { cubicBezier, motion } from 'framer-motion';

export const Sidebar = (): JSX.Element => {
    const isOpen = useSidebar(state => state.isActive);

    return (
        <motion.div
            className={classnames(styles.sidebar, { [styles.active]: isOpen })}
            animate={{ x: isOpen ? 0 : 'calc(100% + 6vw)' }}
            transition={{ type: 'liner', duration: 0.5, delayChildren: 0.5 }}
        >
            <div className={styles.sidebarInner}>
                <p className={styles.nav}>Меню</p>
                <ul className={styles.routes}>
                    <MenuLink path="/" name="Lorem" className={styles.link} />
                    <MenuLink path="/" name="Lorem" className={styles.link} />
                    <MenuLink path="/" name="Lorem" className={styles.link} />
                </ul>
                <Social />
            </div>
        </motion.div>
    );
};
