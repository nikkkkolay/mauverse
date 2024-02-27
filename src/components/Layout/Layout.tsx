import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Navbar, Overlay } from '../';
import classnames from 'classnames';
import styles from './Layout.module.css';

export const Layout = (): JSX.Element => {
  let location = useLocation();

  return (
    <>
      <header className={classnames(styles.header, { [styles.headerHeight]: location.pathname === '/' })}>
        <Navbar />
        {location.pathname === '/' && <Overlay />}
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
