import { Button, ParallaxElement } from '..';
import classnames from 'classnames';
import styles from './BigButtonRow.module.css';

export interface Props {
    className?: string;
    onClick?: () => void;
    fill?: boolean;
    stripe?: boolean;
}

export const BigButtonRow = ({ className, onClick, fill, stripe }: Props): JSX.Element => {
    return (
        <div className={styles.row}>
            {stripe && <div className={styles.stripe}></div>}
            <div className={styles.buttonFixed}>
                <Button isInView fill={fill} className={classnames(styles.button, className)} onClick={onClick}>
                    <ParallaxElement as="div" className={styles.wrapper}>
                        <p>Lorem</p>
                    </ParallaxElement>
                </Button>
            </div>
        </div>
    );
};
