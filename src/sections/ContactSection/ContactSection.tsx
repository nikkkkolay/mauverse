import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMySpring } from '../../hooks/useMySpring';
import { Container, Title, Button, BigButtonRow } from '../../components';
import { ArrowIcon } from '../../icons/ArrowIcon';
import styles from './ContactSection.module.css';
import { useRef } from 'react';

export const ContactSection = (): JSX.Element => {
    const ref = useRef(null);
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ['1 1', '0 0'],
    });

    const height = useTransform(scrollYProgress, [0, 1], [90, 0]);
    const toRight = useTransform(scrollYProgress, [0, 1], ['30%', '10%']);

    const springHeight = useMySpring(height);
    const springButtonToLeft = useMySpring(toRight);

    return (
        <section className={styles.sectionContainer} ref={ref}>
            <motion.div className={styles.footerMain} style={{ height: springHeight }}>
                <div className={styles.rounded}></div>
            </motion.div>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <div className={styles.imageContainer}>
                        <img src="./plug.jpg" alt="logo" />
                        <Title tag="h2"> Lorem ipsum</Title>
                    </div>
                    <Title tag="h2">dolor sit consectetur</Title>
                    <ArrowIcon className={styles.arrow} />
                </div>
                <BigButtonRow stripe style={{ right: springButtonToLeft }}>
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
