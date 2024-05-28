import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { Footer, Navbar, Overlay, PageTransition, Sidebar, ScrollToTop, SmoothScroll, ScrollProgress, Hamburger } from '../';
import styles from './Layout.module.css';
import { useSidebar } from '../../store/useSidebar';

export const Layout = (): JSX.Element => {
    const ref = useRef(null);

    const location = useLocation();
    const isInView = useInView(ref);

    const isActive = useSidebar(state => state.isActive);

    return (
        <PageTransition>
            <>
                <SmoothScroll>
                    <ScrollProgress>
                        <ScrollToTop />
                        <header
                            className={classnames(styles.header, {
                                [styles.headerHeight]: location.pathname === '/',
                                [styles.fillBlack]: location.pathname === '/contacts',
                                [styles.fillWhite]: location.pathname === '/about',
                            })}
                        >
                            <Navbar ref={ref} />
                            {location.pathname === '/' && <Overlay />}
                        </header>
                        <main className={styles.main}>
                            <Outlet />
                        </main>
                        <Footer />
                    </ScrollProgress>
                </SmoothScroll>
                <Sidebar />
                <Hamburger isInView={!isInView || isActive} />
            </>
        </PageTransition>
    );
};
