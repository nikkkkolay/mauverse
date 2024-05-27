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
    const parallax = useTransform(spring, [0, 1], [-200, 0]);

    return (
        <section className={styles.sectionContainer} ref={sectionViewArea}>
            <motion.div className={styles.footerMain} style={{ height: height }}>
                <div className={styles.rounded}></div>
            </motion.div>
            <Container className={styles.container} style={{ y: parallax }} ref={containerRef}>
                <div className={styles.titleContainer}>
                    <div className={styles.imageContainer}>
                        <img src="/plug.jpg" alt="logo" />
                        <Title tag="h2">Lorem ipsum</Title>
                    </div>
                    <Title tag="h2">dolor sit consectetur</Title>
                    <ArrowIcon className={styles.arrow} ref={svgRef} style={{ rotate }} />
                </div>
                <BigButtonRow stripe style={{ right: toRight }}>
                    <Button fill onClick={() => navigate('/contacts')}>
                        <p>Lorem</p>
                    </Button>
                </BigButtonRow>
                <div className={styles.row}>
                    <Button type={'secondary'} as={'a'} href="mailto:lorem@lorem.lo" className={styles.link}>
                        <p>lorem@lorem.lo</p>
                    </Button>
                    <Button type={'secondary'} as={'a'} href="tel:88008888888" className={styles.link}>
                        <p>8 800 888 88 88</p>
                    </Button>
                </div>
            </Container>
        </section>
    );
};
