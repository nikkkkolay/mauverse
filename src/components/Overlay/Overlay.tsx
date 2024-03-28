import { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { ParallaxText } from '..';
import { LabelIcon } from './LabelIcon';
import { ArrowIcon } from '../../icons';
import styles from './Overlay.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMySpring } from '../../hooks/useMySpring';

export const Overlay = (): JSX.Element => {
    const svgRef = useRef<SVGAElement>(null);
    const overlayViewArea = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: overlayViewArea, offset: ['start start', 'end start'] });

    const spring = useMySpring(scrollYProgress);

    const rotate = useTransform(spring, [0, 1], [0, 40]);
    const parallax = useTransform(scrollYProgress, [0, 1], [0, 200]);

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

    return (
        <div className={styles.overlay} ref={overlayViewArea}>
            <motion.img className={styles.banner} src="./plug.jpg" style={{ y: parallax, x: '-50%' }} />
            <div className={styles.container}>
                <div className={classnames(styles.row, styles.about)}>
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
                </div>
                <div className={classnames(styles.row, styles.name)}>
                    <ParallaxText baseVelocity={5}>Hello WOrld -</ParallaxText>
                </div>
            </div>
        </div>
    );
};
