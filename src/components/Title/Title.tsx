import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './Title.module.css';

export interface Props {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
    className?: string;
}

export const Title = ({ tag, children, className }: Props): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1 className={classnames(styles.hTag, className)}>{children}</h1>;
        case 'h2':
            return <h2 className={classnames(styles.hTag, className)}>{children}</h2>;
        case 'h3':
            return <h3 className={classnames(styles.hTag, className)}>{children}</h3>;
        default:
            return <></>;
    }
};
