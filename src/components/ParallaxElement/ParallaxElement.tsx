import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './ParallaxElement.module.css';
import classnames from 'classnames';

type Tag = 'a' | 'li' | 'button' | 'div';

interface Props {
    className?: string;
    as?: Tag;
    href?: string;
    onClick?: () => void;
    isInView?: boolean;
    fill?: boolean;
}

export const ParallaxElement = ({ className, isInView, onClick, children, as, href, fill, ...props }: PropsWithChildren<Props>): JSX.Element => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const fillControls = useAnimation();

    const distance = (x1: number, y1: number, x2: number, y2: number): number => {
        let a = x1 - x2;
        let b = y1 - y2;

        return Math.hypot(a, b);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        const { clientX, clientY } = event;
        const { height, width, left, top } = event.currentTarget.getBoundingClientRect();

        const distanceToTrigger = width * 1.2;

        const distanceMouseButton = distance(clientX, clientY, left + width / 2, top + height / 2);

        if (distanceMouseButton < distanceToTrigger) {
            const middleX = (clientX - (left + width / 3)) * 0.2;
            const middleY = (clientY - (top + height / 3)) * 0.2;
            setPosition({ x: middleX, y: middleY });
        }
    };

    const handleMouseLeave = (): void => {
        fillControls.start({
            y: '-90%',
            transition: { ease: [0.19, 1, 0.22, 1], duration: 1 },
        });
        setPosition({ x: 0, y: 0 });
    };

    const onMouseEnter = (): void => {
        fillControls.start({
            y: ['90%', '-20%'],
            transition: { ease: [0.19, 1, 0.22, 1], duration: 2 },
        });
    };

    const { x, y } = position;

    switch (as) {
        case 'div':
            return (
                <motion.div
                    {...props}
                    className={className}
                    onMouseMove={event => handleMouseMove(event)}
                    onMouseLeave={handleMouseLeave}
                    animate={{ x, y }}
                    whileTap={{ scale: 0.9 }}
                >
                    {children}
                </motion.div>
            );
        case 'li':
            return (
                <motion.li
                    {...props}
                    className={className}
                    onMouseMove={event => handleMouseMove(event)}
                    onMouseLeave={handleMouseLeave}
                    animate={{ x, y }}
                    whileTap={{ scale: 0.9 }}
                >
                    {children}
                </motion.li>
            );
        case 'a':
            return (
                <motion.a
                    {...props}
                    className={classnames(className, { [styles.changedColor]: fill })}
                    onMouseEnter={onMouseEnter}
                    onMouseMove={event => handleMouseMove(event)}
                    onMouseLeave={handleMouseLeave}
                    animate={{ x, y, scale: isInView ? 1 : 0, visibility: 'visible', opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    whileTap={{ scale: 0.9 }}
                    href={href}
                    target="_blank"
                >
                    {children}
                    <motion.div className={classnames(styles.fill, { [styles.changedFill]: fill })} animate={fillControls}></motion.div>
                </motion.a>
            );
        default:
            return (
                <motion.button
                    {...props}
                    className={classnames(className, { [styles.changedColor]: fill })}
                    onMouseEnter={onMouseEnter}
                    onMouseMove={event => handleMouseMove(event)}
                    onMouseLeave={handleMouseLeave}
                    animate={{ x, y, scale: isInView ? 1 : 0, visibility: 'visible', opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClick}
                >
                    {children}
                    <motion.div className={classnames(styles.fill, { [styles.changedFill]: fill })} animate={fillControls}></motion.div>
                </motion.button>
            );
    }
};
