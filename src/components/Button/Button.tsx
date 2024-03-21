import { PropsWithChildren } from 'react';
import { ParallaxElement } from '..';
import classnames from 'classnames';
import styles from './Button.module.css';

type Type = 'a' | 'li' | 'button' | 'div';

interface Props {
    className?: string;
    onClick?: () => void;
    isInView?: boolean;
    fill?: boolean;
    href?: string;
    as?: Type;
}

export const Button = ({ className, onClick, isInView = true, children, fill, as, href, ...props }: PropsWithChildren<Props>): JSX.Element => {
    return (
        <ParallaxElement {...props} onClick={onClick} isInView={isInView} fill={fill} href={href} as={as} className={classnames(styles.button, className)}>
            <ParallaxElement as="div" className={styles.wrapper}>
                {children}
            </ParallaxElement>
        </ParallaxElement>
    );
};
