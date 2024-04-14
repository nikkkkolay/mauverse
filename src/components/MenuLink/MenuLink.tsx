import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ParallaxElement } from '..';
import styles from './MenuLink.module.css';

interface Props {
    name: string;
    path?: string;
    className?: string;
    onClick?: () => void;
}

export const MenuLink = ({ className, onClick, name, path }: Props): JSX.Element => {
    return (
        <ParallaxElement as="li" onClick={onClick} className={styles.link}>
            <NavLink
                to={{
                    pathname: path,
                }}
                className={({ isActive }) => classnames(className, { [styles.active]: isActive })}
            >
                {name}
            </NavLink>
        </ParallaxElement>
    );
};
