import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Container, BigButtonRow, Button } from '../../components';
import { useMySpring } from '../../hooks/useMySpring';
import styles from './AboutSection.module.css';
import { useNavigate } from 'react-router-dom';

const variants = {
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
    const isInView = useInView(columnViewArea);
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll({ target: sectionViewArea, offset: ['start end', 'end start'] });

    const spring = useMySpring(scrollYProgress);

    const buttonTop = useTransform(spring, [0, 1], ['-30%', '-100%']);

    return (
        <section className={styles.aboutSection} ref={sectionViewArea}>
            <Container className={styles.container}>
                <motion.div className={styles.col} ref={columnViewArea}>
                    {text.split(' ').map((p, i) => (
                        <motion.span className={styles.text} key={p + i}>
                            <motion.span variants={variants} initial="hidden" animate={isInView && 'visible'} className={styles.textInner}>
                                {p}
                            </motion.span>
                            {'\u00A0'}
                        </motion.span>
                    ))}
                </motion.div>
                <div className={styles.col}>
                    <span className={styles.smallText}>Lorem voluptas repellat corrupti quibusdam nesciunt mollitia commodi, fugiat optio?</span>
                </div>
            </Container>
            <BigButtonRow style={{ y: buttonTop, x: -15 }}>
                <Button className={styles.buttonFixed} fill onClick={() => navigate('/about')}>
                    О проекте
                </Button>
            </BigButtonRow>
        </section>
    );
};

export default AboutSection;
