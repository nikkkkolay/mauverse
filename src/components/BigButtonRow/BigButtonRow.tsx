import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { motion } from 'framer-motion';

import styles from './BigButtonRow.module.css';

export interface Props {
    stripe?: boolean;
    children: ReactNode;
}

export const BigButtonRow = motion(
    forwardRef(({ stripe, children }: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
        return (
            <div className={styles.row}>
                {stripe && <div className={styles.stripe}></div>}
                <div className={styles.buttonFixed} ref={ref}>
                    {children}
                </div>
            </div>
        );
    }),
);
