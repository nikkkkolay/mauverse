import { PropsWithChildren, useRef } from 'react';
import { motion, useAnimation, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import styles from './SmoothScroll.module.css';
import { useMySpring } from '../../hooks/useMySpring';

export const SmoothScroll = ({ children }: PropsWithChildren): JSX.Element => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const controls = useAnimation();
    const { scrollY, scrollYProgress } = useScroll({ target: scrollRef });
    const springScroll = useMySpring(scrollYProgress);
    const scroll = useTransform(springScroll, [1, 0], ['99%', '1%']);

    // useMotionValueEvent(scrollYProgress, 'change', () => {
    //     if (scrollY) {
    //         controls.start({ opacity: 1 });
    //     }
    //     setTimeout(() => {
    //         controls.start({ opacity: 0 });
    //     }, 800);
    // });

    return (
        <>
            <motion.div className={styles.scrollRoot} ref={scrollRef}>
                {children}
                <div className={styles.scroll}>
                    <motion.div className={styles.thumb} style={{ y: scroll }} animate={controls}></motion.div>
                </div>
            </motion.div>
        </>
    );
};
