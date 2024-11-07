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
        transition: { delay: 0.005, ease: 'linear', duration: 0.9 },
    },
};

const text = 'MAUverse — это современное мобильное приложение, разработанное для повышения удобства и качества образовательного процесса';

export const AboutSection = (): JSX.Element => {
    const columnViewArea = useRef<HTMLDivElement>(null);
    const sectionViewArea = useRef<HTMLDivElement>(null);
    const isInView = useInView(columnViewArea);
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll({ target: sectionViewArea, offset: ['start end', 'end start'] });

    const spring = useMySpring(scrollYProgress);

    const buttonTop = useTransform(spring, [0, 1], ['-10%', '-100%']);

    return (
        <section className={styles.section} ref={sectionViewArea}>
            <Container className={styles.container}>
                <h1 className={styles.col} ref={columnViewArea}>
                    {text.split(' ').map((p, i) => (
                        <motion.span className={styles.text} key={p + i}>
                            <motion.span variants={variants} initial="hidden" animate={isInView && 'visible'} className={styles.textInner}>
                                {p}
                            </motion.span>
                        </motion.span>
                    ))}
                </h1>
                <div className={styles.col}>
                    <p>
                        Приложение предназначено для студентов и преподавателей нашего университета и предоставляет все необходимые инструменты для
                        успешной организации учебного процесса
                    </p>
                </div>
            </Container>
            <BigButtonRow style={{ y: buttonTop, x: -50 }}>
                <Button className={styles.buttonFixed} fill onClick={() => navigate('/about')}>
                    О проекте
                </Button>
            </BigButtonRow>
        </section>
    );
};

export default AboutSection;
