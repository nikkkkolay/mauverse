import { Container, Form, Title } from '../../components';
import { ArrowIcon } from './Arrow';
import styles from './FormSection.module.css';

export const FormSection = (): JSX.Element => {
    return (
        <section className={styles.sectionContainer}>
            <Container>
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
