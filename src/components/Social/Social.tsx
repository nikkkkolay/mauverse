import { Info, ListItem } from '..';
import styles from './Social.module.css';

interface Props {
    className?: string;
}

export const Social = ({ className }: Props): JSX.Element => {
    return (
        <Info title={'Социальные сети'} className={className}>
            <ul className={styles.links}>
                <ListItem name="Вконтакте" path="https://vk.com/mauniver" blank className={styles.link} />
                <ListItem name="Telegram" path="https://t.me/mauniver_news" blank className={styles.link} />
                <ListItem name="Rutube" path="https://rutube.ru/channel/25551566/" blank className={styles.link} />
                <ListItem name="YouTube" path="https://www.youtube.com/channel/UCGdYnWMD4oAmO8mnLNUSiQg" blank className={styles.link} />
            </ul>
        </Info>
    );
};
