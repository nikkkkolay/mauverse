import { Container, Title, Form } from '../../components';
import { ArrowIcon } from '../../icons/ArrowIcon';

import styles from './Contacts.module.css';

export const Contacts = (): JSX.Element => {
    return (
        <section className={styles.sectionContainer}>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <Title tag="h2"> Lorem ipsum</Title>
                    <Title tag="h2">dolor sit amet consectetur</Title>
                    <ArrowIcon className={styles.arrow} />
                </div>
                <Form />
            </Container>
        </section>
    );
};
