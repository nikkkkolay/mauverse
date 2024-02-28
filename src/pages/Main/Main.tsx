import { motion } from 'framer-motion';
import { Container } from '../../components';
import styles from './Main.module.css';

export const Main = (): JSX.Element => {
    return (
        <>
            <Container>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione ut vel labore eveniet iure provident laboriosam earum placeat voluptas repellat
                    corrupti quibusdam nesciunt mollitia commodi, fugiat optio? Ad maiores corrupti libero asperiores, dolor ducimus iure molestias beatae excepturi, quibusdam
                    veniam maxime rerum neque sint, pariatur deleniti voluptatem. Eveniet voluptate placeat, nobis harum est sapiente eum veniam magni repellendus nam eaque,
                    maiores quos. Impedit harum ratione optio vitae minus. Eaque nulla hic reiciendis dignissimos, consequatur voluptates eveniet possimus illo, similique rem culpa
                    aut, esse explicabo sit magni quae soluta aliquam ex quaerat
                </motion.div>
            </Container>

            <div className={styles.formContainer}>
                <Container>
                    <h2>Lorem, ipsum dolor.</h2>
                    <form action="">
                        <div className={styles.item}>
                            <label htmlFor="">
                                <h4>Lorem, ipsum.</h4>
                            </label>
                            <input type="text" />
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="">
                                <h4>Lorem, ipsum.</h4>
                            </label>
                            <input type="text" />
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="">
                                <h4>Lorem, ipsum.</h4>
                            </label>
                            <input type="text" />
                        </div>
                    </form>
                </Container>
            </div>
        </>
    );
};
