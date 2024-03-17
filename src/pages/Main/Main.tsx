import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button, Container, ParallaxElement, Title } from '../../components';
import { ArrowIcon } from './Arrow';
import classnames from 'classnames';
import styles from './Main.module.css';

const textAnimation = {
    hidden: {
        y: -10,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.1 },
    }),
};

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione ut vel labore eveniet iure provident laboriosam earum placeat voluptas repellat
                    corrupti quibusdam nesciunt mollitia commodi, fugiat optio? Ad maiores corrupti libero asperiores`;

export const Main = (): JSX.Element => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    return (
        <>
            <Container className={styles.textContainer}>
                <div>
                    {text &&
                        text.split(' ').map((p, i) => (
                            <motion.span key={p + i} custom={i} ref={ref} variants={textAnimation} initial="hidden" animate={controls} className={styles.text}>
                                {p + ' '}
                            </motion.span>
                        ))}
                </div>
                <motion.p animate={{ visibility: 'visible', opacity: isInView ? 1 : 0 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit</motion.p>
                <div className={styles.buttonFixed}>
                    <Button isInView className={classnames(styles.button)}>
                        <ParallaxElement as="div" className={styles.wrapper}>
                            Lorem
                        </ParallaxElement>
                    </Button>
                </div>
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
