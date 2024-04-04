import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './Title.module.css';

export interface Props {
    tag: 'h1' | 'h2' | 'h3' | 'h4';
    children: ReactNode;
    className?: string;
}

export const Title = ({ tag, children, className }: Props): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={classnames(styles.hTag, className)}>{children}</h1>;
        case 'h2':
            return <h2 className={classnames(styles.hTag, styles.h2, className)}>{children}</h2>;
        case 'h3':
            return <h3 className={classnames(styles.hTag, styles.h3, className)}>{children}</h3>;
        case 'h4':
            return <h4 className={classnames(styles.hTag, styles.h4, className)}>{children}</h4>;
        default:
            return <></>;
    }
};
