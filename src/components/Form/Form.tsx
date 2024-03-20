import { BigButtonRow } from '../../components';
import styles from './Form.module.css';

export const Form = (): JSX.Element => {
    return (
        <form className={styles.form} action="">
            <div className={styles.item}>
                <span>01</span>
                <label htmlFor="">Lorem, ipsum.</label>
                <input className={styles.input} type="text" placeholder="Lorem, ipsum." required />
            </div>
            <div className={styles.item}>
                <span>02</span>
                <label htmlFor="">Lorem, ipsum.</label>
                <input className={styles.input} type="text" placeholder="Lorem, ipsum." required />
            </div>
            <div className={styles.item}>
                <span>03</span>
                <label htmlFor="">Lorem, ipsum.</label>
                <textarea className={styles.input} placeholder="Lorem, ipsum." required />
            </div>

            <BigButtonRow fill stripe />
        </form>
    );
};
