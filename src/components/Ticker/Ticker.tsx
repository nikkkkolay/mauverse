import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';
import styles from './Ticker.module.css';

interface Props {
    children: string;
    baseVelocity: number;
}

export const Ticker = ({ children, baseVelocity = 100 }: Props): JSX.Element => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 1000, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
    const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);
    const directionFactor = useRef<number>(-1);

    useAnimationFrame((t, delta) => {
        t;
        let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={styles.parallax}>
            <motion.div className={styles.scroller} style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
};
