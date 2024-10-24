import { useRef } from 'react';
import { BigButtonRow, Container, Title, LoadingDots, MetaHelmet } from '../../components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowIcon, EiosIcon, TimetableIcon, ServicesIcon, RoadmapIcon } from './../../icons';
import { useMySpring } from '../../hooks/useMySpring';
import styles from './AboutPage.module.css';
import classnames from 'classnames';

export const AboutPage = (): JSX.Element => {
    const sectionViewArea = useRef<HTMLDivElement>(null);
    const introViewArea = useRef<HTMLDivElement>(null);
    const skitViewArea = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGAElement>(null);

    const scrollYSectionProgress = useScroll({ target: sectionViewArea, offset: ['start start', 'end end'] });
    const scrollYIntroImgProgress = useScroll({ target: introViewArea, offset: ['start end', 'end start'] });

    const springArrowRotate = useMySpring(scrollYSectionProgress.scrollYProgress);
    const springIntroImg = useMySpring(scrollYIntroImgProgress.scrollYProgress);

    const backgroundTransform = useTransform(scrollYSectionProgress.scrollYProgress, [0, 1], ['#ffffff', '#e9eaeb']);
    const introArrowRotate = useTransform(springArrowRotate, [0, 1], [0, 150]);
    const introImgTransform = useTransform(springIntroImg, [0, 1], [-200, 0]);

    return (
        <>
            <MetaHelmet title={'MAUverse | О проекте'} />
            <motion.section className={styles.about} ref={sectionViewArea} style={{ backgroundColor: backgroundTransform }}>
                <Container
                    className={styles.header}
                    initial={{ y: 250 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                    <Title tag="h1">Платформа для студентов и преподавателей</Title>
                    <BigButtonRow stripe className={styles.buttonRow}>
                        <img className={styles.logo} src="./logo.svg" alt="Логотип MAUverse" />
                    </BigButtonRow>
                </Container>

                <Container
                    className={styles.content}
                    initial={{ y: 250 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                    <div className={styles.intro} ref={introViewArea}>
                        <motion.div className={styles.col}>
                            <ArrowIcon className={classnames(styles.icon, styles.arrow)} style={{ rotate: introArrowRotate }} ref={svgRef} />
                            <p>
                                Mauverse было создано в рамках конкурса по разработке мобильных приложений, который проводился нашим университетом.
                                Команда разработчиков из студентов и преподавателей, приняв участие в конкурсе, начала работу над приложением, чтобы
                                предложить инновационное решение для повседневных задач, с которыми сталкиваются студенты и сотрудники университета.
                            </p>
                            <p>
                                Приложение ориентировано как на студентов, так и на преподавателей университета. Студенты смогут получать доступ к
                                расписанию, информационным ресурсам и контактам преподавателей, а также отслеживать свою академическую успеваемость.
                                Преподаватели получат доступ к аналогичным функциям, а также смогут управлять своими курсами и взаимодействовать с
                                учебной группой через уведомления и встроенный мессенджер.
                            </p>
                            <p className={styles.special}>
                                <LoadingDots />
                            </p>
                        </motion.div>
                        <div className={styles.col}>
                            <motion.img className={styles.img} src="/img.webp" alt="plug" style={{ y: introImgTransform, x: 0 }} />
                        </div>
                    </div>

                    <div className={styles.outro}>
                        <Title tag="h3">
                            Базовые возможности <LoadingDots />
                        </Title>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <div className={styles.stripe}>
                                    <ArrowIcon className={classnames(styles.icon, styles.arrow)} />
                                </div>
                                <Title tag="h4">Интеграция ЭИОС</Title>
                                <p>
                                    Приложение синхронизировано с Единой информационно-образовательной системой университета, через которую происходит
                                    аутентификация, а также просмотр уведомлений по учебным курсам.
                                </p>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.stripe}>
                                    <ArrowIcon className={classnames(styles.icon, styles.arrow)} />
                                </div>
                                <Title tag="h4">Расписание</Title>
                                <p>
                                    Возможность просматривать расписание занятий своей группы и получать актуальную информацию о предстоящих занятиях.
                                    Преподаватели могут проверять свое индивидуальное расписание и планировать учебный процесс.
                                </p>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.stripe}>
                                    <ArrowIcon className={classnames(styles.icon, styles.arrow)} />
                                </div>
                                <Title tag="h4">Cервисы</Title>
                                <p>
                                    Студенты могут заказать нужную справку через студенческий офис, а также отправить запрос в виртуальную приемную к
                                    ректору или другим сотрудникам и отделам университета.
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
                                    <img className={styles.img} src="/roadmap.webp" alt="plug" />
                                </div>
                                <div className={styles.col}>
                                    {/* <RoadmapIcon className={styles.icon} /> */}
                                    <Title tag="h3">
                                        Дорожная карта <LoadingDots />
                                    </Title>
                                    <p>
                                        В будущем приложение станет универсальным помощником, объединяющим студентов и преподавателей с ресурсами
                                        университета. Среди будущих функций – навигатор по кампусам с текстовыми инструкциями для передвижения внутри
                                        зданий и между ними, встроенный мессенджер для общения и ИИ ассистент для помощи с вопросами по
                                        университетским процедурам. Также планируется Web3-интеграция, позволяющая использовать блокчейн и внутреннюю
                                        валюту для студентов.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </motion.div>
            </motion.section>
        </>
    );
};
