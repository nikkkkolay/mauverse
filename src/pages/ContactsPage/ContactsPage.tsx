import { motion } from 'framer-motion';
import { Container, Title, Form, Social, Info, ListItem } from '../../components';
import { ArrowIcon } from '../../icons/ArrowIcon';

import styles from './ContactsPage.module.css';

export const ContactsPage = (): JSX.Element => {
    return (
        <section className={styles.sectionContainer}>
            <Container className={styles.container}>
                <motion.div
                    className={styles.titleContainer}
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
                >
                    <div className={styles.imageContainer}>
                        <img src="./plug.jpg" alt="logo" />
                        <Title tag="h1"> Lorem ipsum</Title>
                    </div>
                    <Title tag="h2">dolor sit amet consectetur</Title>
                    <ArrowIcon className={styles.arrow} />
                </motion.div>
                <motion.div className={styles.row} initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}>
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
                </motion.div>
            </Container>
        </section>
    );
};
