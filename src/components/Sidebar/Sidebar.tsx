import { MenuLink, Social } from '..';
import { useSidebar } from '../../store/useSidebar';
import { motion } from 'framer-motion';
import classnames from 'classnames';
import styles from './Sidebar.module.css';

const variants = {
    hidden: (custom: number) => ({
        x: '60%',
        transition: { delay: custom * 0.05, ease: [0.5, 0, 0.2, 1], duration: 0.7 },
    }),
    visible: (custom: number) => ({
        x: 0,
        transition: { delay: custom * 0.05, ease: [0.5, 0, 0.2, 1], duration: 0.7 },
    }),
};

export const Sidebar = (): JSX.Element => {
    const isOpen = useSidebar(state => state.isActive);
    const active = useSidebar(state => state.setActive);

    return (
        <>
            <motion.div
                className={classnames(styles.overlay, { [styles.overlayActive]: isOpen })}
                animate={{ opacity: isOpen ? 0.1 : 0, backgroundColor: '#19191c' }}
                transition={{ ease: [0.5, 0, 0.2, 1], duration: 0.7 }}
                onClick={active}
            ></motion.div>

            <motion.div className={styles.sidebar} animate={{ x: isOpen ? 0 : '100%' }} transition={{ ease: [0.5, 0, 0.2, 1], duration: 0.7 }}>
                <div className={styles.sidebarInner}>
                    <p className={styles.nav}>lorem</p>
                    <ul className={styles.routes}>
                        <motion.span custom={1} variants={variants} animate={isOpen ? 'visible' : 'hidden'}>
                            <MenuLink path="/" name="Lorem" className={styles.link} />
                        </motion.span>
                        <motion.span custom={2} variants={variants} animate={isOpen ? 'visible' : 'hidden'}>
                            <MenuLink path="/" name="Lorem" className={styles.link} />
                        </motion.span>
                        <motion.span custom={3} variants={variants} animate={isOpen ? 'visible' : 'hidden'}>
                            <MenuLink path="/" name="Lorem" className={styles.link} />
                        </motion.span>
                    </ul>
                    <Social />
                </div>
            </motion.div>
        </>
    );
};
