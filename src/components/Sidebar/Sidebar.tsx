import { MenuLink, Social } from '..';
import { useSidebar } from '../../store/useSidebar';
import classnames from 'classnames';
import styles from './Sidebar.module.css';
import { motion } from 'framer-motion';

export const Sidebar = (): JSX.Element => {
    const isOpen = useSidebar(state => state.isActive);

    return (
        <motion.div className={classnames(styles.sidebar, { [styles.active]: isOpen })}>
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
