import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMySpring } from '../../hooks/useMySpring';
import { Container, Title, Button, BigButtonRow } from '../../components';
import { ArrowIcon } from '../../icons/ArrowIcon';
import styles from './ContactSection.module.css';

export const ContactSection = (): JSX.Element => {
    const navigate = useNavigate();

    const { scrollY } = useScroll();

    const height = useTransform(scrollY, [0, 1200], [90, 0]);
    const toRight = useTransform(scrollY, [0, 1200], ['50%', '10%']);

    const springHeight = useMySpring(height);

    return (
        <section className={styles.sectionContainer}>
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
