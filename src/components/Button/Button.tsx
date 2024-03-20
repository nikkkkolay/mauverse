import { PropsWithChildren } from 'react';
import { ParallaxElement } from '..';
import classnames from 'classnames';
import styles from './Button.module.css';

interface Props {
    className?: string;
    onClick?: () => void;
    isInView?: boolean;
    fill?: boolean;
}

export const Button = ({ className, onClick, isInView, children, fill, ...props }: PropsWithChildren<Props>): JSX.Element => {
    return (
        <ParallaxElement {...props} as="button" onClick={onClick} isInView={isInView} fill={fill} className={classnames(styles.button, className)}>
            {children}
        </ParallaxElement>
    );
};
