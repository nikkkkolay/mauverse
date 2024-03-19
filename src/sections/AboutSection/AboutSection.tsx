import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button, Container, ParallaxElement } from '../../components';
import styles from './AboutSection.module.css';

const textAnimation = {
    hidden: {
        y: -10,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.1 },
    }),
};

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione ut vel labore eveniet iure provident laboriosam earum placeat  vel labore eveniet iure provident laboriosam earum placeat.`;

export const AboutSection = (): JSX.Element => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) controls.start('visible');
    }, [controls, isInView]);

    return (
        <section>
            <Container className={styles.container}>
                <div className={styles.col}>
                    {text &&
                        text.split(' ').map((p, i) => (
                            <motion.span key={p + i} custom={i} ref={ref} variants={textAnimation} initial="hidden" animate={controls} className={styles.text}>
                                {p + ' '}
                            </motion.span>
                        ))}
                </div>
                <div className={styles.col}>
                    <motion.p animate={{ visibility: 'visible', opacity: isInView ? 1 : 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
                        Lorem voluptas repellat corrupti quibusdam nesciunt mollitia commodi, fugiat optio? Ad maiores corrupti libero asperiores Lorem voluptas repellat corrupt
                    </motion.p>
                </div>
            </Container>
            <div className={styles.row}>
                <div className={styles.buttonFixed}>
                    <Button isInView className={styles.button}>
                        <ParallaxElement as="div" className={styles.wrapper}>
                            <p>Lorem</p>
                        </ParallaxElement>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
