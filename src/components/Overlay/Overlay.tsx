import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import classnames from 'classnames';
import { Ticker } from '..';
import { LabelIcon } from './LabelIcon';
import { ArrowIcon } from '../../icons';
import { useMySpring } from '../../hooks/useMySpring';
import { useLayoutLoading } from '../../store/useLayoutLoading';
import styles from './Overlay.module.css';

export const Overlay = (): JSX.Element => {
    const svgRef = useRef<SVGAElement>(null);
    const overlayViewArea = useRef<HTMLDivElement>(null);
    const { reloaded } = useLayoutLoading(state => state);

    const { scrollYProgress } = useScroll({ target: overlayViewArea, offset: ['start start', 'end start'] });

    const spring = useMySpring(scrollYProgress);

    const rotate = useTransform(spring, [0, 1], [0, 40]);
    const y = useTransform(spring, [0, 1], [0, 200]);

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

    return (
        <div className={styles.overlay} ref={overlayViewArea}>
            <motion.img
                className={styles.banner}
                src="./plug.jpg"
                style={{ x: '-50%', y: y }}
                transition={{ duration: reloaded ? 3 : 1.5, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            />
            <div className={styles.container}>
                <motion.div
                    className={classnames(styles.row, styles.about)}
                    initial={{ y: 250 }}
                    animate={{ y: 0 }}
                    transition={{ duration: reloaded ? 3 : 1.5, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                    <a className={styles.label} href="https://www.mauniver.ru/files/mauverse-v0.8.apk">
                        <div className={styles.wrapper}>
                            <p>{`Скачать APK >>`}</p>
                        </div>
                        <LabelIcon className={styles.labelIcon} />
                    </a>
                    <div className={styles.col}>
                        <ArrowIcon className={styles.arrow} ref={svgRef} style={{ rotate }} />
                        <h1>
                            <span> Платформа </span> для студентов и преподавателей
                        </h1>
                    </div>
                </motion.div>
                <motion.div
                    className={classnames(styles.row, styles.name)}
                    initial={{ y: 250 }}
                    animate={{ y: 0 }}
                    transition={{ duration: reloaded ? 3 : 1.5, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                    <Ticker baseVelocity={5}>MAUverse —</Ticker>
                </motion.div>
            </div>
        </div>
    );
};
