import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames';
import styles from './BigButtonRow.module.css';
export interface Props {
    stripe?: boolean;
    children: ReactNode;
    classNames?: string;
}

export const BigButtonRow = motion(
    forwardRef(({ stripe, children, classNames }: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
        return (
            <div className={styles.row}>
                {stripe && <div className={styles.stripe}></div>}
                <div className={classnames(styles.buttonFixed, classNames)} ref={ref}>
                    {children}
                </div>
            </div>
        );
    }),
);
