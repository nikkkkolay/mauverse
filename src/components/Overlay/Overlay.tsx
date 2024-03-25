import { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { ParallaxText } from '..';
import { LabelIcon } from './LabelIcon';
import { ArrowIcon } from '../../icons';
import styles from './Overlay.module.css';
import { useScroll, useTransform } from 'framer-motion';

export const Overlay = (): JSX.Element => {
    const { scrollY } = useScroll();
    const svgRef = useRef<SVGAElement>(null);
    const rotate = useTransform(scrollY, [0, 400], [0, 40]);

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

    return (
        <div className={styles.overlay}>
            <img className={styles.banner} src="./plug.jpg" />
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
