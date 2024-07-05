import { forwardRef } from 'react';
import classnames from 'classnames';
import { MenuLink } from '..';
import { useSidebar } from '../../store/useSidebar';
import { routs } from '../../routs';
import styles from './Navbar.module.css';

export const Navbar = forwardRef((_props, ref: any): JSX.Element => {
    const isActive = useSidebar(state => state.isActive);
    const setActive = useSidebar(state => state.setActive);

    return (
        <nav className={styles.nav} ref={ref}>
            <img className={styles.logo} src="" alt="Lorem" />
            <ul className={styles.routes}>
                {routs &&
                    routs.map((rout: { path: string; name: string; id: number }) => <MenuLink key={rout.id} path={rout.path} name={rout.name} />)}
            </ul>
            <ul className={classnames(styles.routes, styles.visible)}>
                <li className={classnames({ [styles.colorWhite]: isActive })} onClick={() => setActive(!isActive)}>
                    Menu
                </li>
            </ul>
        </nav>
    );
});
