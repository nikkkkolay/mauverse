import { Info, Link } from '..';
import styles from './Sidebar.module.css';

export const Sidebar = (): JSX.Element => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarInner}>
                {' '}
                <Info title={'Социальные сети'} className={styles.social}>
                    <ul className={styles.links}>
                        <Link name="Вконтакте" path="#" className={styles.link} />
                        <Link name="Вконтакте" path="#" className={styles.link} />
                        <Link name="Вконтакте" path="#" className={styles.link} />
                        <Link name="Вконтакте" path="#" className={styles.link} />
                    </ul>
                </Info>
            </div>
        </div>
    );
};
