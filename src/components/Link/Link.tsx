import { ParallaxElement } from '..';
import { motion } from 'framer-motion';
import styles from './Link.module.css';

interface Props {
    name: string;
}

const slashMotion = {
    rest: { opacity: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.4,
            type: 'tween',
            ease: 'easeIn',
        },
    },
};

export const Link = ({ name }: Props): JSX.Element => {
    return (
        <ParallaxElement as="li" className={styles.link}>
            <motion.a variants={slashMotion} initial="rest" whileHover="hover" animate="rest" href="">
                {name}
            </motion.a>
        </ParallaxElement>
    );
};
