import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import classnames from 'classnames';
import { Footer, Navbar, Overlay, PageTransition, Sidebar, SmoothScroll } from '../';
import styles from './Layout.module.css';

interface Props {
    key?: string;
}

export const Layout = ({ key }: Props): JSX.Element => {
    const location = useLocation();

    return (
        <AnimatePresence initial={false}>
            <PageTransition>
                <SmoothScroll>
                    <header
                        className={classnames(styles.header, {
                            [styles.headerHeight]: location.pathname === '/',
                            [styles.fillBlack]: location.pathname.includes('contacts'),
                            [styles.fillWhite]: location.pathname.includes('about'),
                        })}
                    >
                        <Navbar />
                        {location.pathname === '/' && <Overlay />}
                    </header>
                    <main className={styles.main}>
                        <Outlet />
                    </main>
                    <Footer />
                    <Sidebar />
                </SmoothScroll>
            </PageTransition>
        </AnimatePresence>
    );
};
