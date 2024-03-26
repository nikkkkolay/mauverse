import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { Container, BigButtonRow, Button } from '../../components';
import styles from './AboutSection.module.css';

const textAnimation = {
    hidden: {
        top: '60px',
    },
    visible: (custom: number) => ({
        top: 0,
        transition: { delay: custom * 0.005, ease: 'linear', duration: 0.5 },
    }),
};

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione ut vel labore eveniet`;

export const AboutSection = (): JSX.Element => {
    const ref = useRef(null);

    const controls = useAnimation();
    const isInView = useInView(ref);
    const { scrollY } = useScroll();

    const toTop = useTransform(scrollY, [500, 1000], ['70%', '50%']);
    const colTop = useTransform(scrollY, [500, 1000], ['0%', '-20%']);

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.set('hidden');
        }
    }, [controls, isInView]);

    return (
        <section className={styles.aboutSection}>
            <Container className={styles.container}>
                <motion.div className={styles.col} style={{ top: colTop }} ref={ref}>
                    {text.split(' ').map((p, i) => (
                        <motion.span className={styles.text} key={p + i}>
                            <motion.span custom={i} variants={textAnimation} initial="hidden" animate={controls} className={styles.textInner}>
                                {p}
                            </motion.span>
                            {'\u00A0'}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.div className={styles.col} style={{ top: colTop }}>
                    <span className={styles.smallText}>
                        <motion.span transition={{ ease: 'linear', duration: 0.5 }} animate={{ top: isInView ? 0 : '30px' }} className={styles.smallTextInner}>
                            Lorem voluptas repellat corrupti quibusdam nesciunt mollitia commodi, fugiat optio?
                        </motion.span>
                    </span>
                </motion.div>
            </Container>
            <BigButtonRow style={{ top: toTop }} classNames={styles.buttonFixed}>
                <Button>
                    <p>Lorem</p>
                </Button>
            </BigButtonRow>
        </section>
    );
};

export default AboutSection;
