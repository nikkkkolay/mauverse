import classnames from 'classnames';
import { Button } from '..';
import styles from './Hamburger.module.css';

interface Props {
    onClick: () => void;
    active: boolean;
    isInView?: boolean;
}

export const Hamburger = ({ onClick, active, isInView }: Props): JSX.Element => {
    return (
        <Button onClick={onClick} isInView={isInView} className={classnames(styles.hamburger, { [styles.active]: active })}>
            <div className={styles.bars}></div>
        </Button>
    );
};
