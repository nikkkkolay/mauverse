import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import classnames from 'classnames';
import { Ticker } from '..';
import { LabelIcon } from './LabelIcon';
import { useMySpring } from '../../hooks/useMySpring';
import { useLayoutLoading } from '../../store/useLayoutLoading';
import styles from './Overlay.module.css';

export const Overlay = (): JSX.Element => {
    const overlayViewArea = useRef<HTMLDivElement>(null);
    const { reloaded } = useLayoutLoading(state => state);
    const { scrollYProgress } = useScroll({ target: overlayViewArea, offset: ['start start', 'end start'] });

    const spring = useMySpring(scrollYProgress);

    const y = useTransform(spring, [0, 1], [0, 150]);

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 780);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div
            className={styles.overlay}
            ref={overlayViewArea}
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: reloaded ? 1.8 : 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
            <picture>
                <source media="(min-width: 780px)" srcSet="/banner.webp" />
                <source media="(max-width: 780px)" srcSet="/banner-sm.webp" />
                <motion.img
                    className={styles.banner}
                    src="/banner.webp"
                    alt="Баннер рука держит телефон с мобильным приложением"
                    style={{ x: '-50%', y: isMobile ? 0 : y }}
                    loading="eager"
                />
            </picture>

            <div className={styles.container}>
                <div className={classnames(styles.row, styles.about)}>
                    <a className={styles.label} href="https://www.mauniver.ru/files/mauverse-v0.8.apk">
                        <div className={styles.wrapper}>
                            <p>{`Загрузить >>`}</p>
                        </div>
                        <LabelIcon className={styles.labelIcon} />
                    </a>
                </div>
                <div className={classnames(styles.row, styles.name)}>
                    <Ticker baseVelocity={5}>MAUverse —</Ticker>
                </div>
            </div>
        </motion.div>
    );
};
