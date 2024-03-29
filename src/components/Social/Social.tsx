import { Info, Link } from '..';
import styles from './Social.module.css';

interface Props {
    className?: string;
}

export const Social = ({ className }: Props): JSX.Element => {
    return (
        <Info title={'Социальные сети'} className={className}>
            <ul className={styles.links}>
                <Link name="Вконтакте" path="#" className={styles.link} />
                <Link name="Вконтакте" path="#" className={styles.link} />
                <Link name="Вконтакте" path="#" className={styles.link} />
                <Link name="Вконтакте" path="#" className={styles.link} />
            </ul>
        </Info>
    );
};
