import { Button } from '..';
import classnames from 'classnames';
import styles from './BigButtonRow.module.css';
import { ReactNode } from 'react';

export interface Props {
    className?: string;
    onClick?: () => void;
    fill?: boolean;
    stripe?: boolean;
    children: ReactNode;
}

export const BigButtonRow = ({ className, onClick, fill, stripe, children }: Props): JSX.Element => {
    return (
        <div className={styles.row}>
            {stripe && <div className={styles.stripe}></div>}
            <div className={styles.buttonFixed}>
                <Button fill={fill} className={classnames(styles.button, className)} onClick={onClick}>
                    {children}
                </Button>
            </div>
        </div>
    );
};
