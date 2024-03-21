import { Container, Title, Button, ParallaxElement, BigButtonRow } from '../../components';
import { ArrowIcon } from '../../icons/ArrowIcon';
import styles from './ContactSection.module.css';

export const ContactSection = (): JSX.Element => {
    return (
        <section className={styles.sectionContainer}>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <Title tag="h2"> Lorem ipsum</Title>
                    <Title tag="h2">dolor sit amet consectetur</Title>
                    <ArrowIcon className={styles.arrow} />
                </div>
                <BigButtonRow stripe fill />
                <div className={styles.row}>
                    <Button isInView className={styles.button}>
                        <p>lorem@lorem.lo</p>
                    </Button>
                    <Button isInView className={styles.button}>
                        <p>lorem@lorem.lo</p>
                    </Button>
                </div>
            </Container>
        </section>
    );
};
