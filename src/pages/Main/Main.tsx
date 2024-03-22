import { motion, useTransform, useScroll } from 'framer-motion';
import { ContactSection, AboutSection } from '../../sections';
import styles from './Main.module.css';

export const Main = (): JSX.Element => {
    const { scrollY } = useScroll();

    const heightSizes = [0, 96];
    const offsetY = [0, 100];

    const height = useTransform(scrollY, offsetY, heightSizes);

    return (
        <>
            <AboutSection />
            <motion.div className={styles.footerMain} style={{ height: height }}>
                <div className={styles.rounded}></div>
            </motion.div>
            <ContactSection />
        </>
    );
};
