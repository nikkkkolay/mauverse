import { useNavigate } from 'react-router-dom';
import { BigButtonRow, Button, Container, Title } from '../../components';
import styles from './NotFound.module.css';

export const NotFound = (): JSX.Element => {
    const navigate = useNavigate();
    return (
        <section className={styles.sectionContainer}>
            <Container className={styles.header}>
                <Title tag="h1">
                    404 УПС!
                    <div>такой страницы нет</div>
                </Title>
                <BigButtonRow stripe className={styles.buttonRow}>
                    <Button fill onClick={() => navigate('/')}>
                        <p>На главную</p>
                    </Button>
                </BigButtonRow>
            </Container>
        </section>
    );
};
