import { motion } from 'framer-motion';
import { Container, Title, Form, Social, Info, ListItem, MetaHelmet } from '../../components';
import { ArrowIcon } from '../../icons/ArrowIcon';

import styles from './ContactsPage.module.css';

export const ContactsPage = (): JSX.Element => {
    return (
        <>
            <MetaHelmet title={'MAUverse | Контакты'} />
            <section className={styles.sectionContainer}>
                <Container className={styles.container}>
                    <motion.div
                        className={styles.titleContainer}
                        initial={{ y: 250 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <Title tag="h1">
                            <span>
                                <img src="./logo.svg" alt="Логотип MAUverse" />
                                Напиши нам
                            </span>
                            <span>и оставь обратную связь</span>
                        </Title>

                        <ArrowIcon className={styles.arrow} />
                    </motion.div>
                    <motion.div
                        className={styles.row}
                        initial={{ y: 250 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <div className={styles.col}>
                            <Form />
                        </div>
                        <div className={styles.col}>
                            <Info title={'Контакты'}>
                                <ul className={styles.links}>
                                    <ListItem name="info@mauniver.ru" path="mailto:info@mauniver.ru" className={styles.link} blank />
                                    <ListItem name="mauverse@mauniver.ru" path="mailto:mauverse@mauniver.ru" className={styles.link} blank />
                                    <ListItem name="t.me/mauverse_feedback" path="https://t.me/mauverse_feedback" className={styles.link} blank />
                                </ul>
                            </Info>
                            <Social className={styles.social} />
                        </div>
                    </motion.div>
                </Container>
            </section>
        </>
    );
};
