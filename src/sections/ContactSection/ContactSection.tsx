import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScroll, useTransform } from 'framer-motion';
import { Container, Title, Button, BigButtonRow } from '../../components';
import { ArrowIcon } from '../../icons/ArrowIcon';
import styles from './ContactSection.module.css';
import { useMySpring } from '../../hooks/useMySpring';

export const ContactSection = (): JSX.Element => {
    const navigate = useNavigate();
    const svgRef = useRef<SVGAElement>(null);
    const sectionViewArea = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: sectionViewArea, offset: ['start end', 'end end'] });
    const spring = useMySpring(scrollYProgress);
    const toRight = useTransform(spring, [0, 1], ['30%', '10%']);
    const rotate = useTransform(spring, [0, 1], [40, 90]);

    return (
        <section className={styles.section} ref={sectionViewArea}>
            <Container className={styles.container}>
                <div className={styles.titleContainer}>
                    <Title tag="h2">
                        <span>
                            <img src="/logo.svg" alt="Логотип MAUverse" />
                            Напишите
                        </span>
                        <span>и оставьте обратную связь</span>
                    </Title>
                    <ArrowIcon className={styles.arrow} ref={svgRef} style={{ rotate }} />
                </div>
                <BigButtonRow stripe style={{ right: toRight }}>
                    <Button fill onClick={() => navigate('/contacts')}>
                        Контакты
                    </Button>
                </BigButtonRow>
                <div className={styles.row}>
                    <Button type={'secondary'} as={'a'} href="mailto:mauverse@mauniver.ru" className={styles.link}>
                        mauverse@mauniver.ru
                    </Button>
                    <Button type={'secondary'} as={'a'} href="https://t.me/mauverse_feedback" className={styles.link}>
                        t.me/mauverse_feedback
                    </Button>
                </div>
            </Container>
        </section>
    );
};
