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
                <BigButtonRow stripe fill onClick={() => console.log('text')} />
            </Container>
        </section>
    );
};
