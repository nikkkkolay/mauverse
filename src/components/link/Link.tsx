import { motion } from 'framer-motion';
import styles from './Link.module.css';
import classnames from 'classnames';
import { ReactNode } from 'react';

interface Props {
    href: string;
    className?: string;
    children: ReactNode;
}

const listVariants = {
    visible: { left: 0, right: 0 },
    hidden: { left: '50%', right: '50%' },
};

export const Link = ({ href, className, children }: Props): JSX.Element => {
    return (
        <motion.a className={classnames(styles.link, className)} whileHover="visible" initial="hidden" exit="hidden" href={href} target="__blank">
            {children}
            <motion.div
                variants={listVariants}
                style={{
                    position: 'absolute',
                    bottom: '0',
                    height: '1px',
                    background: '#455ce9',
                }}
            ></motion.div>
        </motion.a>
    );
};
