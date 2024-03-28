import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Navbar, Overlay, SmoothScroll } from '../';
import classnames from 'classnames';
import styles from './Layout.module.css';

export const Layout = (): JSX.Element => {
    let location = useLocation();

    return (
        <SmoothScroll>
            <header className={classnames(styles.header, { [styles.headerHeight]: location.pathname === '/', [styles.fill]: location.pathname === '/contacts' })}>
                <Navbar />
                {location.pathname === '/' && <Overlay />}
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </SmoothScroll>
    );
};
