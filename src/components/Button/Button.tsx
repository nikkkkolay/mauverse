import { PropsWithChildren } from 'react';
import { MagneticElement } from '..';
import classnames from 'classnames';
import styles from './Button.module.css';
import { IMagneticElement } from '../MagneticElement/MagneticElement';

type Type = 'primary' | 'secondary' | 'tertiary';

interface IButton extends IMagneticElement {
    type?: Type;
}

export const Button = ({
    className,
    onClick,
    isInView = true,
    children,
    fill,
    as,
    href,
    type,
    disabled,
    ...props
}: PropsWithChildren<IButton>): JSX.Element => {
    return (
        <MagneticElement
            {...props}
            onClick={onClick}
            isInView={isInView}
            fill={fill}
            href={href}
            as={as}
            disabled={disabled}
            className={classnames(styles.button, { [styles.secondary]: type === 'secondary', [styles.tertiary]: type === 'tertiary' }, className)}
        >
            <MagneticElement as="div" className={styles.wrapper}>
                {children}
            </MagneticElement>
        </MagneticElement>
    );
};
