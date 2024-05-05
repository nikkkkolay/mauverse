import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { MagneticElement } from '..';
import styles from './MenuLink.module.css';

interface Props {
    name: string;
    path?: string;
    className?: string;
    onClick?: () => void;
}

export const MenuLink = ({ className, onClick, name, path }: Props): JSX.Element => {
    return (
        <MagneticElement as="li" onClick={onClick} className={styles.list}>
            <NavLink
                to={{
                    pathname: path,
                }}
                className={({ isActive }) => classnames(className, styles.link, { [styles.active]: isActive }, { [styles.sidebarActive]: isActive && className })}
            >
                {name}
            </NavLink>
        </MagneticElement>
    );
};
