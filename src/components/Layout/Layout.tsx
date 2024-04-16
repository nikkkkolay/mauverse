import { Outlet, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { Footer, Navbar, Overlay, PageTransition, Sidebar, SmoothScroll } from '../';
import styles from './Layout.module.css';

export const Layout = (): JSX.Element => {
    const location = useLocation();

    return (
        <>
            <PageTransition />
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
        </>
    );
};
