import { useEffect, useRef } from 'react';
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

    const y = useTransform(spring, [0, 1], [0, 200]);

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

    return (
        <div className={styles.overlay} ref={overlayViewArea}>
            <picture>
                <source media="(max-width: 780px)" srcSet="./banner-sm.webp" />
                <source media="(min-width: 780px)" srcSet="./banner.webp" />
                <motion.img
                    className={styles.banner}
                    src="./banner.webp"
                    alt="Banner"
                    style={{ x: '-50%', y: y }}
                    transition={{ duration: reloaded ? 3 : 1.5, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
                />
            </picture>

            <div className={styles.container}>
                <motion.div
                    className={classnames(styles.row, styles.about)}
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{ duration: reloaded ? 3 : 1.5, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                    <a className={styles.label} href="https://www.mauniver.ru/files/mauverse-v0.8.apk">
                        <div className={styles.wrapper}>
                            <p>{`Скачать APK >>`}</p>
                        </div>
                        <LabelIcon className={styles.labelIcon} />
                    </a>
                </motion.div>
                <motion.div
                    className={classnames(styles.row, styles.name)}
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{ duration: reloaded ? 3 : 1.5, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                    <Ticker baseVelocity={5}>MAUverse —</Ticker>
                </motion.div>
            </div>
        </div>
    );
};
