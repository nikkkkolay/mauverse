import { forwardRef } from 'react';
import classnames from 'classnames';
import { useLocation } from 'react-router-dom';
import { MenuLink } from '..';
import { useSidebar } from '../../store/useSidebar';
import { publicRoutes } from '../../routs';
import styles from './Navbar.module.css';

export const Navbar = forwardRef((_props, ref: any): JSX.Element => {
    const location = useLocation();
    const isActive = useSidebar(state => state.isActive);
    const setActive = useSidebar(state => state.setActive);

    return (
        <nav className={styles.nav} ref={ref}>
            <a href="https://mauniver.ru" target="_blank">
                {location.pathname === '/contacts' ? (
                    <>
                        <img className={styles.logoFull} src="/logo_rus_full_white_H.png" alt="Лого МАУ" />
                        <img className={styles.logoAbb} src="/logo_rus_abb_white_H.png" alt="Лого МАУ" />
                    </>
                ) : (
                    <>
                        <img className={styles.logoFull} src="/logo_rus_full_black_H.png" alt="Лого МАУ" />
                        <img className={styles.logoAbb} src="/logo_rus_abb_black_H.png" alt="Лого МАУ" />
                    </>
                )}
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
