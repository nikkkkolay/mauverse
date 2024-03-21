import { PropsWithChildren } from 'react';
import { ParallaxElement } from '..';
import classnames from 'classnames';
import styles from './Button.module.css';

type Tag = 'a' | 'li' | 'button' | 'div';
type Type = 'primary' | 'secondary';

interface Props {
    type?: Type;
    className?: string;
    onClick?: () => void;
    isInView?: boolean;
    fill?: boolean;
    href?: string;
    as?: Tag;
}

export const Button = ({ className, onClick, isInView = true, children, fill, as, href, type, ...props }: PropsWithChildren<Props>): JSX.Element => {
    return (
        <ParallaxElement
            {...props}
            onClick={onClick}
            isInView={isInView}
            fill={fill}
            href={href}
            as={as}
            className={classnames(styles.button, { [styles.secondary]: type === 'secondary' }, className)}
        >
            <ParallaxElement as="div" className={styles.wrapper}>
                {children}
            </ParallaxElement>
        </ParallaxElement>
    );
};
