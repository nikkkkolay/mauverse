import { Info, ListItem } from '..';
import styles from './Social.module.css';

interface Props {
    className?: string;
}

export const Social = ({ className }: Props): JSX.Element => {
    return (
        <Info title={'Social'} className={className}>
            <ul className={styles.links}>
                <ListItem name="Lorem ipsum" path="#" className={styles.link} />
                <ListItem name="Lorem" path="#" className={styles.link} />
                <ListItem name="Lorem ipsum" path="#" className={styles.link} />
                <ListItem name="Lorem" path="#" className={styles.link} />
            </ul>
        </Info>
    );
};
