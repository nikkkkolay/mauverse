import { motion } from 'framer-motion';

const dotVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const LoadingDots = () => {
    return (
        <>
            <motion.span variants={dotVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}>
                .
            </motion.span>
            <motion.span variants={dotVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}>
                .
            </motion.span>
            <motion.span variants={dotVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: 0.4 }}>
                .
            </motion.span>
        </>
    );
};
