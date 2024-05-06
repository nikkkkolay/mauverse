import { Outlet, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { Footer, Navbar, Overlay, PageTransition, Sidebar, ScrollToTop } from '../';
import styles from './Layout.module.css';

export const Layout = (): JSX.Element => {
    const location = useLocation();

    return (
        <PageTransition>
            <>
                <ScrollToTop />

                <header
                    className={classnames(styles.header, {
                        [styles.headerHeight]: location.pathname === '/',
                        [styles.fillBlack]: location.pathname === '/contacts',
                        [styles.fillWhite]: location.pathname === '/about',
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
            </>
        </PageTransition>
    );
};
