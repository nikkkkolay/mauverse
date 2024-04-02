import { Container, Title } from '../../components';

import styles from './About.module.css';

export const About = (): JSX.Element => {
    return (
        <section className={styles.sectionContainer}>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <Title tag="h1">Lorem ipsum dolor sit consectetur</Title>
                </div>
            </Container>
        </section>
    );
};
