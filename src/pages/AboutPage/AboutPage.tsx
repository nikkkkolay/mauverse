import { useRef } from 'react';
import { BigButtonRow, Container, Title, Link, LoadingDots } from '../../components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowIcon } from './../../icons/ArrowIcon';
import { useMySpring } from '../../hooks/useMySpring';
import styles from './AboutPage.module.css';

export const AboutPage = (): JSX.Element => {
    const sectionViewArea = useRef<HTMLDivElement>(null);
    const introViewArea = useRef<HTMLDivElement>(null);
    const skitViewArea = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGAElement>(null);

    const scrollYSectionProgress = useScroll({ target: sectionViewArea, offset: ['start start', 'end end'] });
    const scrollYIntroImgProgress = useScroll({ target: introViewArea, offset: ['start end', 'end start'] });
    const scrollYIntroTextProgress = useScroll({ target: sectionViewArea, offset: ['start start', 'end start'] });
    const scrollYSkitProgress = useScroll({ target: skitViewArea, offset: ['start end', 'end start'] });

    const springArrowRotate = useMySpring(scrollYSectionProgress.scrollYProgress);
    const springIntroImg = useMySpring(scrollYIntroImgProgress.scrollYProgress);
    const springText = useMySpring(scrollYIntroTextProgress.scrollYProgress);
    const sprongSkitImg = useMySpring(scrollYSkitProgress.scrollYProgress);

    const backgroundTransform = useTransform(scrollYSectionProgress.scrollYProgress, [0, 1], ['#ffffff', '#e9eaeb']);
    const introTextTransform = useTransform(springText, [0, 1], [0, 500]);
    const introArrowRotate = useTransform(springArrowRotate, [0, 1], [0, 200]);
    const introImgTransform = useTransform(springIntroImg, [0, 1], [-250, 0]);
    const skitImgTransform = useTransform(sprongSkitImg, [0, 1], [-250, 0]);

    return (
        <motion.section className={styles.about} ref={sectionViewArea} style={{ backgroundColor: backgroundTransform }}>
            <Container
                className={styles.header}
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
                <Title tag="h1">
                    Lorem ipsum dolor
                    <div>sit consectetur</div>
                </Title>
                <BigButtonRow stripe className={styles.buttonRow}>
                    <div className={styles.decoration}>Lorem</div>
                </BigButtonRow>
            </Container>

            <Container
                className={styles.content}
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.33, 1, 0.68, 1] }}
            >
                <div className={styles.intro} ref={introViewArea}>
                    <motion.div className={styles.col} style={{ y: introTextTransform, x: 0 }}>
                        <ArrowIcon className={styles.icon} style={{ rotate: introArrowRotate }} ref={svgRef} />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio placeat quas, dolore sunt aperiam expedita facere minus
                            in eius beatae nemo cupiditate sit numquam. doloremque <Link href="#">eveniet</Link> tempora.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio placeat quas, dolore sunt aperiam expedita facere</p>
                        <p className={styles.special}>
                            engine <LoadingDots />
                        </p>
                    </motion.div>
                    <div className={styles.col}>
                        <motion.img className={styles.img} src="/plug.jpg" alt="plug" style={{ y: introImgTransform, x: 0 }} />
                    </div>
                </div>

                <div className={styles.outro}>
                    <Title tag="h3">
                        Lorem ipsum dolor <LoadingDots />
                    </Title>

                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={styles.stripe}>
                                {' '}
                                <ArrowIcon className={styles.icon} />
                            </div>
                            <Title tag="h4">Lorem</Title>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sequi corporis harum delectus culpa eveniet rem
                                voluptatem vero deleniti nemo!
                            </p>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.stripe}>
                                {' '}
                                <ArrowIcon className={styles.icon} />
                            </div>
                            <Title tag="h4">Ipsum</Title>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum aliquam quidem tenetur, autem pariatur
                                assumenda. Id nostrum eius in corrupti pariatur quod, nam velit nesciunt quisquam minima? Mollitia, quaerat?
                            </p>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.stripe}>
                                {' '}
                                <ArrowIcon className={styles.icon} />
                            </div>
                            <Title tag="h4">Dolor</Title>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita possimus in accusantium, iure corporis,
                                debitis deleniti unde magnam laboriosam molestias velit sequi esse tempore?
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            <motion.div className={styles.skitRoot} ref={skitViewArea}>
                <Container className={styles.skitContainer}>
                    <div className={styles.skit}>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <motion.img className={styles.img} src="/plug.jpg" alt="plug" style={{ y: skitImgTransform, x: 0 }} />
                            </div>
                            <div className={styles.col}>
                                <ArrowIcon className={styles.icon} />
                                <Title tag="h3">Ipsum</Title>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore necessitatibus, voluptate tenetur
                                    recusandae accusantium quod quam deserunt fugit similique iste laboriosam magnam distinctio ex est ad dignissimos
                                    corrupti impedit soluta excepturi nihil magni, odio repellat id.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </motion.div>
        </motion.section>
    );
};
