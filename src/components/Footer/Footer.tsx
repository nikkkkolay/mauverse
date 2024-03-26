import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, Info } from '../index';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    let location = useLocation();

    const { scrollY } = useScroll();
    const parallax = useTransform(scrollY, [800, 1100], [-300, 0]);

    const parallaxContacts = location.pathname === '/contacts' || '*' ? 'none' : parallax;

    return (
        <motion.footer className={styles.footer} style={{ y: parallaxContacts }}>
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
        </motion.footer>
    );
};
