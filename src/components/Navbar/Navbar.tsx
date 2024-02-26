import { useRef, useState } from 'react';
import classNames from 'classnames';
import { Hamburger, MenuLink } from '..';
import { useInView } from 'framer-motion';
import styles from './Navbar.module.css';

export const Navbar = (): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);

  const toggleOpenMenu = () => {
    setActiveMenu(state => !state);
  };

  return (
    <nav className={styles.nav} ref={ref}>
      <img className={styles.logo} src="" alt="Лого" />
      <ul className={styles.routes}>
        <MenuLink path="/" name="Lorem" />
        <MenuLink path="/" name="Lorem" />
        <MenuLink path="/" name="Lorem" />
      </ul>
      <ul className={classNames(styles.routes, styles.visible)}>
        <MenuLink name="Lorem" type="menu" onClick={() => toggleOpenMenu()} />
      </ul>
      <Hamburger onClick={() => toggleOpenMenu()} active={activeMenu} isInView={!isInView} />
    </nav>
  );
};
