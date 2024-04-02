import { Info, Link } from '..';
import styles from './Social.module.css';

interface Props {
    className?: string;
}

export const Social = ({ className }: Props): JSX.Element => {
    return (
        <Info title={'Lorem ipsum'} className={className}>
            <ul className={styles.links}>
                <Link name="Lorem ipsum" path="#" className={styles.link} />
                <Link name="Lorem" path="#" className={styles.link} />
                <Link name="Lorem ipsum" path="#" className={styles.link} />
                <Link name="Lorem" path="#" className={styles.link} />
            </ul>
        </Info>
    );
};
