import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, spring } from 'framer-motion';
import { Container, BigButtonRow, Button } from '../../components';
import { useMySpring } from '../../hooks/useMySpring';
import styles from './AboutSection.module.css';

const textAnimation = {
    hidden: {
        top: '60px',
    },
    visible: {
        top: 0,
        transition: { delay: 0.005, ease: 'linear', duration: 0.5 },
    },
};

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione ut vel labore eveniet`;

export const AboutSection = (): JSX.Element => {
    const columnViewArea = useRef<HTMLDivElement>(null);
    const sectionViewArea = useRef<HTMLDivElement>(null);

    const controls = useAnimation();
    const isInView = useInView(columnViewArea);

    const { scrollYProgress } = useScroll({ target: sectionViewArea, offset: ['start end', 'end start'] });

    const spring = useMySpring(scrollYProgress);

    const buttonTop = useTransform(spring, [0, 1], ['-30%', '-100%']);

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.set('hidden');
        }
    }, [controls, isInView]);

    return (
        <section className={styles.aboutSection} ref={sectionViewArea}>
            <Container className={styles.container}>
                <motion.div className={styles.col} ref={columnViewArea}>
                    {text.split(' ').map((p, i) => (
                        <motion.span className={styles.text} key={p + i}>
                            <motion.span variants={textAnimation} initial="hidden" animate={controls} className={styles.textInner}>
                                {p}
                            </motion.span>
                            {'\u00A0'}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.div className={styles.col}>
                    <span className={styles.smallText}>
                        <motion.span transition={{ duration: 0.5 }} animate={{ top: isInView ? 0 : '30px' }} className={styles.smallTextInner}>
                            Lorem voluptas repellat corrupti quibusdam nesciunt mollitia commodi, fugiat optio?
                        </motion.span>
                    </span>
                </motion.div>
            </Container>
            <BigButtonRow style={{ y: buttonTop, x: 15 }} classNames={styles.buttonFixed}>
                <Button>
                    <p>Lorem</p>
                </Button>
            </BigButtonRow>
        </section>
    );
};

export default AboutSection;
