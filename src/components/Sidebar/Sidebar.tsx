import { MenuLink, Social } from '..';
import { useSidebar } from '../../store/useSidebar';
import { motion } from 'framer-motion';
import classnames from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = (): JSX.Element => {
    const isOpen = useSidebar(state => state.isActive);
    const active = useSidebar(state => state.setActive);

    return (
        <>
            <motion.div
                className={classnames(styles.overlay, { [styles.overlayActive]: isOpen })}
                animate={{ opacity: isOpen ? 0.1 : 0, backgroundColor: '#19191c' }}
                transition={{ ease: 'easeIn' }}
                onClick={active}
            ></motion.div>

            <motion.div className={styles.sidebar} animate={{ x: isOpen ? 0 : 'calc(100% + 6vw)' }} transition={{ ease: [0.5, 0, 0.2, 1], duration: 0.7 }}>
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
        </>
    );
};
