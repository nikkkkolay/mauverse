import { useRef } from 'react';
import { BigButtonRow, Container, Title } from '../../components';
import { useScroll, useTransform } from 'framer-motion';
import { useMySpring } from '../../hooks/useMySpring';
import styles from './AboutPage.module.css';
import { ArrowIcon } from './../../icons/ArrowIcon';
export const AboutPage = (): JSX.Element => {
    const sectionViewArea = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionViewArea, offset: ['start end', 'end start'] });

    const spring = useMySpring(scrollYProgress);

    // const buttonTop = useTransform(spring, [0, 1], ['-30%', '-100%']);

    return (
        <section className={styles.about}>
            <Container className={styles.header}>
                <Title tag="h1">
                    Lorem ipsum dolor
                    <div>sit consectetur</div>
                </Title>
                <BigButtonRow stripe className={styles.buttonRow}>
                    <div className={styles.decoration}>Lorem</div>
                </BigButtonRow>
            </Container>
            <Container className={styles.content}>
                <div className={styles.intro}>
                    <div className={styles.col}>
                        <ArrowIcon className={styles.icon} />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio placeat quas, dolore sunt aperiam expedita facere minus in eius beatae nemo
                            cupiditate sit numquam. doloremque eveniet tempora nemo.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio placeat quas, dolore sunt aperiam expedita facere</p>
                        <p className={styles.special}>Lorem ...</p>
                    </div>
                    <div className={styles.col}>
                        <img className={styles.img} src="/plug.jpg" alt="plug" />
                    </div>
                </div>
                <div className={styles.outro}>
                    <Title tag="h3">Lorem ipsum dolor</Title>
                </div>
            </Container>
        </section>
    );
};
