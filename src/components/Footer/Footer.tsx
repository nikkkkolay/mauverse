import { Link } from '../Link/Link';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <div className={styles.version}>
                <p className={styles.title}>ВЕРСИЯ</p>
                <p className={styles.copyright}>©</p>
            </div>
            <div className={styles.social}>
                <p className={styles.title}>CОЦИАЛЬНЫЕ СЕТИ</p>
                <ul className={styles.links}>
                    <Link name="Вконтакте" path="#" />
                    <Link name="Вконтакте" path="#" />
                    <Link name="Вконтакте" path="#" />
                    <Link name="Вконтакте" path="#" />
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
