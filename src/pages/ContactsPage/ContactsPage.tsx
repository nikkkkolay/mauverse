import { Container, Title, Form, Social, Info, ListItem } from '../../components';
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
                <div className={styles.row}>
                    <div className={styles.col}>
                        <Form />
                    </div>
                    <div className={styles.col}>
                        <Info title={'Contacts'}>
                            <ul className={styles.links}>
                                <ListItem name="mail@mail.net" path="#" className={styles.link} />
                                <ListItem name="Dolor sit amet consectetur" path="#" className={styles.link} />
                                <ListItem name="Lorem ipsum amet" path="#" className={styles.link} />
                                <ListItem name="8 999 999 99" path="#" className={styles.link} />
                            </ul>
                        </Info>
                        <Social className={styles.social} />
                    </div>
                </div>
            </Container>
        </section>
    );
};
