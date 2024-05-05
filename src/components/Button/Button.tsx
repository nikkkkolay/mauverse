import { PropsWithChildren } from 'react';
import { MagneticElement } from '..';
import classnames from 'classnames';
import styles from './Button.module.css';

type Tag = 'a' | 'li' | 'button' | 'div';
type Type = 'primary' | 'secondary' | 'tertiary';

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
        <MagneticElement
            {...props}
            onClick={onClick}
            isInView={isInView}
            fill={fill}
            href={href}
            as={as}
            className={classnames(styles.button, { [styles.secondary]: type === 'secondary', [styles.tertiary]: type === 'tertiary' }, className)}
        >
            <MagneticElement as="div" className={styles.wrapper}>
                {children}
            </MagneticElement>
        </MagneticElement>
    );
};
