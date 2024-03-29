import { Social } from '..';
import styles from './Sidebar.module.css';

export const Sidebar = (): JSX.Element => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarInner}>
                <Social />
            </div>
        </div>
    );
};
