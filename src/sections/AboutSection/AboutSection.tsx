import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Container } from '../../components';
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

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione ut vel labore eveniet iure provident laboriosam earum placeat voluptas repellat
                    corrupti quibusdam nesciunt mollitia commodi, fugiat optio? Ad maiores corrupti libero asperiores`;

export const AboutSection = (): JSX.Element => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    return (
        <section>
            <Container className={styles.textContainer}>
                <div>
                    {text &&
                        text.split(' ').map((p, i) => (
                            <motion.span key={p + i} custom={i} ref={ref} variants={textAnimation} initial="hidden" animate={controls} className={styles.text}>
                                {p + ' '}
                            </motion.span>
                        ))}
                </div>
                <motion.p animate={{ visibility: 'visible', opacity: isInView ? 1 : 0 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit</motion.p>
            </Container>
        </section>
    );
};

export default AboutSection;
