import { useLocation } from 'react-router-dom';
import { ContactSection } from '../../sections';
import { Link, Info } from '../index';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    let location = useLocation();

    return (
        <footer className={styles.footer}>
            {location.pathname !== '/contacts' && <ContactSection />}
            <div className={styles.footerContainer}>
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
            </div>
        </footer>
    );
};
