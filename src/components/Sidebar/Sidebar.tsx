import { MenuLink, Social } from '..';
import styles from './Sidebar.module.css';

export const Sidebar = (): JSX.Element => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarInner}>
                <p>Меню</p>
                <ul className={styles.routes}>
                    <MenuLink path="/" name="Lorem" className={styles.link} type={'menu'} />
                    <MenuLink path="/" name="Lorem" className={styles.link} />
                    <MenuLink path="/" name="Lorem" className={styles.link} />
                </ul>
                <Social />
            </div>
        </div>
    );
};
