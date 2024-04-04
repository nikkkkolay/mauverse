import { useRef } from 'react';
import { BigButtonRow, Container, Title } from '../../components';
import { useScroll, useTransform } from 'framer-motion';
import { useMySpring } from '../../hooks/useMySpring';
import styles from './AboutPage.module.css';

export const AboutPage = (): JSX.Element => {
    const sectionViewArea = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionViewArea, offset: ['start end', 'end start'] });

    const spring = useMySpring(scrollYProgress);

    // const buttonTop = useTransform(spring, [0, 1], ['-30%', '-100%']);

    return (
        <section className={styles.sectionContainer}>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <Title tag="h1">
                        Lorem ipsum dolor
                        <div>sit consectetur</div>
                    </Title>
                    <BigButtonRow stripe className={styles.row}>
                        <div className={styles.decoration}>Lorem</div>
                    </BigButtonRow>
                </div>
            </Container>
        </section>
    );
};
