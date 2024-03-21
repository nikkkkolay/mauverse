import { useNavigate } from 'react-router-dom';
import { Container, Title, Button, BigButtonRow } from '../../components';
import { ArrowIcon } from '../../icons/ArrowIcon';
import styles from './ContactSection.module.css';

export const ContactSection = (): JSX.Element => {
    const navigate = useNavigate();
    return (
        <section className={styles.sectionContainer}>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <div className={styles.imageContainer}>
                        <img src="./kelly-sikkema-7alo7OJVNVw-unsplash.jpg" alt="logo" />
                        <Title tag="h2"> Lorem ipsum</Title>
                    </div>
                    <Title tag="h2">dolor sit consectetur</Title>
                    <ArrowIcon className={styles.arrow} />
                </div>
                <BigButtonRow stripe fill onClick={() => navigate('/contacts')}>
                    <p>Lorem</p>
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
