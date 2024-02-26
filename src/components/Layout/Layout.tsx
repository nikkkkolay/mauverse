import { Outlet, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { Navbar, Overlay, ParallaxElement } from '../';
import styles from './Layout.module.css';
import { motion } from 'framer-motion';

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
      <footer className={styles.footer}>
        <div className={styles.version}>
          <p className={styles.title}>ВЕРСИЯ</p>
          <p>©</p>
        </div>
        <div className={styles.social}>
          <p className={styles.title}>CОЦИАЛЬНЫЕ СЕТИ</p>
          <ul className={styles.links}>
            <ParallaxElement as="li" className={styles.link}>
              <motion.a href="">вконтакте</motion.a>
            </ParallaxElement>
            <ParallaxElement as="li" className={styles.link}>
              <motion.a href="">инстаграм</motion.a>
            </ParallaxElement>
            <ParallaxElement as="li" className={styles.link}>
              <motion.a href="">телеграм</motion.a>
            </ParallaxElement>
            <ParallaxElement as="li" className={styles.link}>
              <motion.a href="">паралелограм</motion.a>
            </ParallaxElement>
          </ul>
        </div>
      </footer>
    </>
  );
};
