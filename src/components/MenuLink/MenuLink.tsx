import classnames from 'classnames';
import styles from './MenuLink.module.css';
import { ParallaxElement } from '..';

interface Props {
    name: string;
    type?: string;
    path?: string;
    className?: string;
    onClick?: () => void;
}

export const MenuLink = ({ className, onClick, name, type, path }: Props): JSX.Element => {
    return (
        <ParallaxElement as="li" onClick={onClick} className={classnames(className, styles.link, { [styles.menu]: type == 'menu' })}>
            <a href={path}>{name}</a>
        </ParallaxElement>
    );
};
