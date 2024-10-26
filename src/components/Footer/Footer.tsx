import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { ContactSection } from '../../sections';
import { Social, Info } from '../index';
import styles from './Footer.module.css';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMySpring } from '../../hooks/useMySpring';

export const Footer = (): JSX.Element => {
    const location = useLocation();
    const sectionViewArea = useRef<HTMLDivElement>(null);

    const notFoundStyle = location.pathname === '/404';
    const isOffsetDisabled = location.pathname === '/contacts' || location.pathname === '/404';
    const { scrollYProgress } = useScroll({ target: sectionViewArea, offset: ['start end', 'end end'] });

    const spring = useMySpring(scrollYProgress);
    const height = useTransform(spring, [0, 1], [150, 0]);
    const top = useTransform(spring, [0, 1], [140, 0]);

    const offsetSection = useTransform(spring, [0, 1], isOffsetDisabled ? [0, 0] : [-150, 0]);

    return (
        <motion.footer className={styles.footer} ref={sectionViewArea} style={{ y: offsetSection }}>
            {!isOffsetDisabled && (
                <>
                    <motion.div className={styles.footerMain} style={{ height: height, top: top }}>
                        <div className={styles.rounded}></div>
                    </motion.div>
                    <ContactSection />
                </>
            )}

            <div className={classnames(styles.footerContainer, { [styles.footer404]: notFoundStyle })}>
                <Info title={'Версия'} className={classnames(styles.version, { [styles.version404]: notFoundStyle })}>
                    <p className={styles.copyright}>МАУ © 2024</p>
                </Info>
                <Social className={classnames(styles.social, { [styles.social404]: notFoundStyle })} />
            </div>
        </motion.footer>
    );
};
