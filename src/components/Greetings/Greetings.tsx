import { motion } from 'framer-motion';
import styles from './Greetings.module.css';

export const Greetings = () => {
    return (
        <div className={styles.greeting}>
            <motion.h2
                initial={{ opacity: 0, scale: 0, x: '-50%' }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 1],
                }}
                transition={{
                    duration: 1,
                    delay: 1,
                }}
                className={styles.title}
            >
                Lorem
            </motion.h2>
            <motion.h2
                initial={{ opacity: 0, scale: 0, x: '-50%' }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 1],
                }}
                transition={{
                    duration: 1,
                    delay: 2,
                }}
                className={styles.title}
            >
                Ipsum
            </motion.h2>
            <motion.h2
                initial={{ opacity: 0, scale: 0, x: '-50%' }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 1],
                }}
                transition={{
                    duration: 1,
                    delay: 3,
                }}
                className={styles.title}
            >
                Dolor
            </motion.h2>
        </div>
    );
};
