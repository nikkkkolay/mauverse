import { useRef, useState } from 'react';
import classNames from 'classnames';
import { Hamburger, MenuLink } from '..';
import { useInView } from 'framer-motion';
import { useSidebar } from '../../store/useSidebar';
import styles from './Navbar.module.css';

export const Navbar = (): JSX.Element => {
    const active = useSidebar(state => state.setActive);

    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <nav className={styles.nav} ref={ref}>
            <img className={styles.logo} src="" alt="Lorem" />
            <ul className={styles.routes}>
                <MenuLink path="/" name="Lorem" />
                <MenuLink path="/" name="Lorem" />
                <MenuLink path="/" name="Lorem" />
            </ul>
            <ul className={classNames(styles.routes, styles.visible)}>
                <MenuLink name="Lorem" type="menu" onClick={active} />
            </ul>
            <Hamburger onClick={active} isInView={!isInView} />
        </nav>
    );
};
