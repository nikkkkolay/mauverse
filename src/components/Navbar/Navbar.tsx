import { forwardRef } from 'react';
import classnames from 'classnames';
import { MenuLink } from '..';
import { useSidebar } from '../../store/useSidebar';
import { publicRoutes } from '../../routs';
import styles from './Navbar.module.css';

export const Navbar = forwardRef((_props, ref: any): JSX.Element => {
    const isActive = useSidebar(state => state.isActive);
    const setActive = useSidebar(state => state.setActive);

    return (
        <nav className={styles.nav} ref={ref}>
            <a href="https://mauniver.ru" target="_blank">
                <img className={styles.logoFull} src="/logo_rus_full_H.png" alt="Лого МАУ" />
                <img className={styles.logoAbb} src="/logo_rus_abb_H.png" alt="Лого МАУ" />
            </a>
            <ul className={styles.routes}>
                {publicRoutes &&
                    publicRoutes.map((rout: { path: string; name: string; id: number }) => (
                        <MenuLink key={rout.id} path={rout.path} name={rout.name} />
                    ))}
            </ul>
            <ul className={classnames(styles.routes, { [styles.visible]: !isActive })}>
                <li className={classnames(styles.menu, { [styles.colorWhite]: isActive })} onClick={() => setActive(!isActive)}>
                    Меню
                </li>
            </ul>
        </nav>
    );
});
