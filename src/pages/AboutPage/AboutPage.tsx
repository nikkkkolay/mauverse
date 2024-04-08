import { useRef } from 'react';
import { BigButtonRow, Container, Title, Link } from '../../components';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './AboutPage.module.css';
import { ArrowIcon } from './../../icons/ArrowIcon';

export const AboutPage = (): JSX.Element => {
    const sectionViewArea = useRef<HTMLDivElement>(null);
    const skitViewArea = useRef<HTMLDivElement>(null);
    const introViewArea = useRef<HTMLDivElement>(null);

    const scrollYSectionProgress = useScroll({ target: sectionViewArea, offset: ['start start', 'end end'] });
    const scrollYSkitProgress = useScroll({ target: skitViewArea, offset: ['start end', 'end start'] });
    const scrollYIntroProgress = useScroll({ target: introViewArea, offset: ['start end', 'end start'] });

    const backgroundTransform = useTransform(scrollYSectionProgress.scrollYProgress, [0, 1], ['#ffffff', '#e9eaeb']);
    const skitImgTransform = useTransform(scrollYSkitProgress.scrollYProgress, [0, 1], [-250, -50]);
    const introImgTransform = useTransform(scrollYIntroProgress.scrollYProgress, [0, 1], [0, 0]);

    return (
        <motion.section className={styles.about} ref={sectionViewArea} style={{ backgroundColor: backgroundTransform }}>
            <Container className={styles.header}>
                <Title tag="h1">
                    Lorem ipsum dolor
                    <div>sit consectetur</div>
                </Title>
                <BigButtonRow stripe className={styles.buttonRow}>
                    <div className={styles.decoration}>Lorem</div>
                </BigButtonRow>
            </Container>

            <Container className={styles.content}>
                <div className={styles.intro} ref={introViewArea}>
                    <div className={styles.col}>
                        <ArrowIcon className={styles.icon} />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio placeat quas, dolore sunt aperiam expedita facere minus in eius beatae nemo
                            cupiditate sit numquam. doloremque <Link href="#">eveniet</Link> tempora.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio placeat quas, dolore sunt aperiam expedita facere</p>
                        <p className={styles.special}>Lorem ...</p>
                    </div>
                    <div className={styles.col}>
                        <motion.img className={styles.img} src="/plug.jpg" alt="plug" style={{ y: introImgTransform, x: 0 }} />
                    </div>
                </div>

                <div className={styles.outro}>
                    <Title tag="h3">Lorem ipsum dolor</Title>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={styles.stripe}>
                                {' '}
                                <ArrowIcon className={styles.icon} />
                            </div>
                            <Title tag="h4">Lorem</Title>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sequi corporis harum delectus culpa eveniet rem voluptatem vero deleniti nemo!
                            </p>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.stripe}>
                                {' '}
                                <ArrowIcon className={styles.icon} />
                            </div>
                            <Title tag="h4">Ipsum</Title>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum aliquam quidem tenetur, autem pariatur assumenda. Id nostrum eius in corrupti
                                pariatur quod, nam velit nesciunt quisquam minima? Mollitia, quaerat?
                            </p>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.stripe}>
                                {' '}
                                <ArrowIcon className={styles.icon} />
                            </div>
                            <Title tag="h4">Dolor</Title>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita possimus in accusantium, iure corporis, debitis deleniti unde magnam
                                laboriosam molestias velit sequi esse tempore?
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore necessitatibus, voluptate tenetur recusandae accusantium quod quam
                                    deserunt fugit similique iste laboriosam magnam distinctio ex est ad dignissimos corrupti impedit soluta excepturi nihil magni, odio repellat
                                    id.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </motion.div>
        </motion.section>
    );
};
