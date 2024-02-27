import { ParallaxElement } from '..';
import { motion } from 'framer-motion';
import styles from './Link.module.css';

interface Props {
  name: string;
}

export const Link = ({ name }: Props): JSX.Element => {
  return (
    <ParallaxElement as="li" className={styles.link}>
      <motion.a href="">{name}</motion.a>
    </ParallaxElement>
  );
};
