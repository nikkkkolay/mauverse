import { Link, Info, Container } from '../index';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <Info title={'Версия'} className={styles.version}>
                <p className={styles.copyright}>©</p>
            </Info>

            <Info title={'Социальные сети'} className={styles.social}>
                <ul className={styles.links}>
                    <Link name="Вконтакте" path="#" className={styles.link} />
                    <Link name="Вконтакте" path="#" className={styles.link} />
                    <Link name="Вконтакте" path="#" className={styles.link} />
                    <Link name="Вконтакте" path="#" className={styles.link} />
                </ul>
            </Info>
        </footer>
    );
};
