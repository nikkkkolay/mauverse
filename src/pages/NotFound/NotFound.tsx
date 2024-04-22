import { useNavigate } from 'react-router-dom';
import { BigButtonRow, Button, Container, Title } from '../../components';
import styles from './NotFound.module.css';

export const NotFound = (): JSX.Element => {
    const navigate = useNavigate();
    return (
        <section className={styles.sectionContainer}>
            <Container className={styles.header}>
                <Title tag="h1">
                    404 Lorem ipsum
                    <div>sit consectetur</div>
                </Title>
                <BigButtonRow stripe className={styles.buttonRow}>
                    <Button fill onClick={() => navigate('/')}>
                        <p>Lorem</p>
                    </Button>
                </BigButtonRow>
            </Container>
        </section>
    );
};
