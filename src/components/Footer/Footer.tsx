import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { ContactSection } from '../../sections';
import { Social, Info } from '../index';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    const location = useLocation();
    const notFoundStyle = location.pathname === '/404';

    return (
        <footer className={styles.footer}>
            {location.pathname != '/contacts' && location.pathname != '/404' && <ContactSection />}

            <div className={classnames(styles.footerContainer, { [styles.footer404]: notFoundStyle })}>
                <Info title={'Lorem'} className={classnames(styles.version, { [styles.version404]: notFoundStyle })}>
                    <p className={styles.copyright}>©</p>
                </Info>
                <Social className={classnames(styles.social, { [styles.social404]: notFoundStyle })} />
            </div>
        </footer>
    );
};
