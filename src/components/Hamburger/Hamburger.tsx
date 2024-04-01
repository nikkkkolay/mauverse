import classnames from 'classnames';
import { Button } from '..';
import styles from './Hamburger.module.css';
import { useSidebar } from '../../store/useSidebar';

interface Props {
    onClick: () => void;
    isInView?: boolean;
}

export const Hamburger = ({ onClick, isInView }: Props): JSX.Element => {
    const isOpen = useSidebar(state => state.isActive);
    return (
        <Button onClick={onClick} isInView={isInView} className={classnames(styles.hamburger, { [styles.active]: isOpen })}>
            <div className={styles.bars}></div>
        </Button>
    );
};
