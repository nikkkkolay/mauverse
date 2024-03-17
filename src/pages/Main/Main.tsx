import { motion } from 'framer-motion';
import { Button, Container, ParallaxElement, Title } from '../../components';
import { ArrowIcon } from './Arrow';
import classnames from 'classnames';
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
                    <div className={styles.titleContainer}>
                        <Title tag="h2"> Lorem ipsum</Title>
                        <Title tag="h2">dolor sit amet consectetur</Title>
                        <ArrowIcon className={styles.arrow} />
                    </div>
                    <form className={styles.form} action="">
                        <div className={styles.item}>
                            <span>01</span>
                            <label htmlFor="">
                                <h4>Lorem, ipsum.</h4>
                            </label>
                            <input className={styles.input} type="text" placeholder="Lorem, ipsum." required />
                        </div>
                        <div className={styles.item}>
                            <span>02</span>
                            <label htmlFor="">
                                <h4>Lorem, ipsum.</h4>
                            </label>
                            <input className={styles.input} type="text" placeholder="Lorem, ipsum." required />
                        </div>
                        <div className={styles.item}>
                            <span>03</span>
                            <label htmlFor="">
                                <h4>Lorem, ipsum.</h4>
                            </label>
                            <textarea className={styles.input} placeholder="Lorem, ipsum." required />
                        </div>

                        <div className={styles.row}>
                            <div className={styles.stripe}></div>
                            <div className={styles.buttonFixed}>
                                <Button isInView fill className={classnames(styles.button)}>
                                    <ParallaxElement as="div" className={styles.wrapper}>
                                        Lorem
                                    </ParallaxElement>
                                </Button>
                            </div>
                        </div>
                    </form>
                </Container>
            </div>
        </>
    );
};
