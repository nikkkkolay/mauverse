import { useRef, useState, useCallback, useLayoutEffect, PropsWithChildren } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './SmoothScroll.module.css';
import { useMySpring } from '../../hooks/useMySpring';

export const SmoothScroll = ({ children }: PropsWithChildren) => {
    const scrollRef = useRef<any>(null);

    const [pageHeight, setPageHeight] = useState(0);

    const resizePageHeight = useCallback((entries: any) => {
        for (let entry of entries) {
            setPageHeight(entry.contentRect.height);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(entries => resizePageHeight(entries));
        scrollRef && resizeObserver.observe(scrollRef.current);
        return () => resizeObserver.disconnect();
    }, [scrollRef, resizePageHeight]);

    const { scrollY } = useScroll();
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
    const spring = useMySpring(transform);

    return (
        <>
            <motion.div ref={scrollRef} style={{ y: spring }} className={styles.smoothContainer}>
                {children}
            </motion.div>
            <div style={{ height: pageHeight }} />
        </>
    );
};
