import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Button, BigButtonRow } from '../../components';
import { ArrowIcon } from '../../icons/ArrowIcon';
import styles from './ContactSection.module.css';
import { useMySpring } from '../../hooks/useMySpring';

export const ContactSection = (): JSX.Element => {
    const svgRef = useRef<SVGAElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionViewArea = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();
    const { scrollYProgress } = useScroll({ target: sectionViewArea, offset: ['start end', 'end end'] });

    const spring = useMySpring(scrollYProgress);

    const height = useTransform(spring, [0, 1], [150, 0]);
    const toRight = useTransform(spring, [0, 1], ['30%', '10%']);
    const rotate = useTransform(spring, [0, 1], [40, 90]);
    const parallax = useTransform(spring, [0, 1], [-150, 0]);

    return (
        <section className={styles.sectionContainer} ref={sectionViewArea}>
            <motion.div className={styles.footerMain} style={{ height: height }}>
                <div className={styles.rounded}></div>
            </motion.div>
            <Container className={styles.container} style={{ y: parallax }} ref={containerRef}>
                <div className={styles.titleContainer}>
                    <Title tag="h1">
                        <span>
                            <img src="./logo.svg" alt="Логотип MAUverse" />
                            Напишите нам
                        </span>
                        <span>и оставь обратную связь</span>
                    </Title>
                    <ArrowIcon className={styles.arrow} ref={svgRef} style={{ rotate }} />
                </div>
                <BigButtonRow stripe style={{ right: toRight }}>
                    <Button fill onClick={() => navigate('/contacts')}>
                        Написать
                    </Button>
                </BigButtonRow>
                <div className={styles.row}>
                    <Button type={'secondary'} as={'a'} href="mailto:mauverse@mauniver.ru" className={styles.link}>
                        mauverse@mauniver.ru
                    </Button>
                    <Button type={'secondary'} as={'a'} href="https://t.me/mauverse_feedback" className={styles.link}>
                        t.me/mauverse_feedback
                    </Button>
                </div>
            </Container>
        </section>
    );
};
