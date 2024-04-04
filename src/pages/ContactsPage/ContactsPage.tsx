import { Container, Title, Form } from '../../components';
import { ArrowIcon } from '../../icons/ArrowIcon';

import styles from './ContactsPage.module.css';

export const ContactsPage = (): JSX.Element => {
    return (
        <section className={styles.sectionContainer}>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <div className={styles.imageContainer}>
                        <img src="./plug.jpg" alt="logo" />
                        <Title tag="h1"> Lorem ipsum</Title>
                    </div>
                    <Title tag="h2">dolor sit amet consectetur</Title>
                    <ArrowIcon className={styles.arrow} />
                </div>
                <Form />
            </Container>
        </section>
    );
};
