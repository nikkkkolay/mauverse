import classnames from 'classnames';
import { Button } from '..';
import styles from './Hamburger.module.css';
import { useSidebar } from '../../store/useSidebar';

interface Props {
    isInView?: boolean;
}

export const Hamburger = ({ isInView }: Props): JSX.Element => {
    const isActive = useSidebar(state => state.isActive);
    const setActive = useSidebar(state => state.setActive);
    return (
        <Button onClick={() => setActive(!isActive)} isInView={isInView} className={classnames(styles.hamburger, { [styles.active]: isActive })}>
            <div className={styles.bars}></div>
        </Button>
    );
};
