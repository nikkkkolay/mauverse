import { Button, ParallaxElement } from '..';
import styles from './BigButton.module.css';

export const BigButton = ({}) => {
    return (
        <Button isInView fill className={styles.button}>
            <ParallaxElement as="div" className={styles.wrapper}>
                Lorem
            </ParallaxElement>
        </Button>
    );
};
