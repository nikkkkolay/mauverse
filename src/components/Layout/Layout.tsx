import { Outlet, useLocation } from 'react-router-dom';
import clasnames from 'classnames';
import { Navbar, Overlay } from '../';
import styles from './Layout.module.css';

export const Layout = (): JSX.Element => {
  let location = useLocation();

  return (
    <>
      <header className={clasnames(styles.header, { [styles.headerHeight]: location.pathname === '/' })}>
        <Navbar />
        {location.pathname === '/' && <Overlay />}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};
