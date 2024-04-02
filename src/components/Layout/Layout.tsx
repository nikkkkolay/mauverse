import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Navbar, Overlay, Sidebar, SmoothScroll } from '../';
import classnames from 'classnames';
import styles from './Layout.module.css';

export const Layout = (): JSX.Element => {
    let location = useLocation();

    return (
        <SmoothScroll>
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
        </SmoothScroll>
    );
};
