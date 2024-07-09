import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames';
import styles from './BigButtonRow.module.css';

export interface Props {
    stripe?: boolean;
    children: ReactNode;
    className?: string;
}

export const BigButtonRow = motion(
    forwardRef(({ stripe, children, className }: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
        return (
            <div className={classnames(styles.row, className)}>
                {stripe && <div className={styles.stripe}></div>}
                <div className={styles.buttonFixed} ref={ref}>
                    {children}
                </div>
            </div>
        );
    }),
);
