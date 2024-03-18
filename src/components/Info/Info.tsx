import { ReactNode } from 'react';
import styles from './Info.module.css';

interface Props {
    title: string;
    children: ReactNode;
    className?: string;
}

export const Info = ({ title, children, className }: Props) => {
    return (
        <div className={className}>
            <p className={styles.title}>{title}</p>
            {children}
        </div>
    );
};
