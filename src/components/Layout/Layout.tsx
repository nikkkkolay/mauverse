import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Footer, Navbar, Overlay } from '../';
import classnames from 'classnames';
import styles from './Layout.module.css';

export const Layout = (): JSX.Element => {
    let location = useLocation();
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: scrollRef });

    const scroll = useTransform(scrollYProgress, [0, 1], ['99%', '1%']);

    return (
        <motion.div className={styles.scrollRoot} ref={scrollRef}>
            <header className={classnames(styles.header, { [styles.headerHeight]: location.pathname === '/', [styles.fill]: location.pathname === '/contacts' })}>
                <Navbar />
                {location.pathname === '/' && <Overlay />}
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
            <motion.div className={styles.scroll}>
                <motion.div className={styles.thumb} style={{ height: scroll }}></motion.div>
            </motion.div>
        </motion.div>
    );
};
