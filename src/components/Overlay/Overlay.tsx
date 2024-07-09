import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import classnames from 'classnames';
import { Ticker } from '..';
import { LabelIcon } from './LabelIcon';
import { ArrowIcon } from '../../icons';
import { useMySpring } from '../../hooks/useMySpring';
import styles from './Overlay.module.css';

export const Overlay = (): JSX.Element => {
    const svgRef = useRef<SVGAElement>(null);
    const overlayViewArea = useRef<HTMLDivElement>(null);

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
                style={{ top: y, x: '-50%' }}
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            />
            <div className={styles.container}>
                <motion.div
                    className={classnames(styles.row, styles.about)}
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    <div className={styles.label}>
                        <div className={styles.wrapper}>
                            <p>Lorem.</p>
                        </div>
                        <LabelIcon className={styles.labelIcon} />
                    </div>
                    <div className={styles.col}>
                        <ArrowIcon className={styles.arrow} ref={svgRef} style={{ rotate }} />
                        <h1>
                            <span>Lorem</span>Lorem, ipsum dolor.
                        </h1>
                    </div>
                </motion.div>
                <motion.div
                    className={classnames(styles.row, styles.name)}
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    <Ticker baseVelocity={5}>Hello WOrld -</Ticker>
                </motion.div>
            </div>
        </div>
    );
};
