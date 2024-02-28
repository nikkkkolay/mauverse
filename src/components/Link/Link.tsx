import { ParallaxElement } from '..';
import { motion } from 'framer-motion';
import styles from './Link.module.css';

interface Props {
    name: string;
    path: string;
}

const listVariants = {
    visible: { left: 0, right: 0 },
    hidden: { left: '50%', right: '50%' },
};

export const Link = ({ name, path }: Props): JSX.Element => {
    return (
        <ParallaxElement as="li" className={styles.link}>
            <motion.a whileHover="visible" initial="hidden" exit="hidden" href={path}>
                {name}
                <motion.div
                    variants={listVariants}
                    style={{
                        position: 'absolute',
                        bottom: '-8px',
                        height: '1px',
                        background: '#ffffff',
                    }}
                ></motion.div>
            </motion.a>
        </ParallaxElement>
    );
};
