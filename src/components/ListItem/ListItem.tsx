import { MagneticElement } from '..';
import { motion } from 'framer-motion';
import styles from './ListItem.module.css';
import classnames from 'classnames';

interface Props {
    name: string;
    path: string;
    className?: string;
}

const listVariants = {
    visible: { left: 0, right: 0 },
    hidden: { left: '50%', right: '50%' },
};

export const ListItem = ({ name, path, className }: Props): JSX.Element => {
    return (
        <MagneticElement as="li" className={classnames(styles.link, className)}>
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
        </MagneticElement>
    );
};
