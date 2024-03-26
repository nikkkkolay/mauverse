import { ForwardedRef, PropsWithChildren, forwardRef } from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames';
import styles from './Container.module.css';

interface Props {
    className?: string;
}

export const Container = motion(
    forwardRef(({ children, className }: PropsWithChildren<Props>, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
        return (
            <div className={classnames(className, styles.container)} ref={ref}>
                {children}
            </div>
        );
    }),
);
