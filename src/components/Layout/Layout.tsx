import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Navbar, Overlay, Preloader, Sidebar, SmoothScroll } from '../';
import classnames from 'classnames';
import styles from './Layout.module.css';

export const Layout = (): JSX.Element => {
    let location = useLocation();

    return (
        <SmoothScroll>
            {/* <Preloader /> */}
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
    );
};
