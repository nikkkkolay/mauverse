import { useLocation } from 'react-router-dom';
import { ContactSection } from '../../sections';
import { Social, Info } from '../index';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    let location = useLocation();

    return (
        <footer className={styles.footer}>
            {location.pathname !== '/contacts' && <ContactSection />}
            <div className={styles.footerContainer}>
                <Info title={'Lorem'} className={styles.version}>
                    <p className={styles.copyright}>©</p>
                </Info>
                <Social className={styles.social} />
            </div>
        </footer>
    );
};
