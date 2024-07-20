import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { BigButtonRow, Button } from '../../components';
import styles from './Form.module.css';
import { useFetch } from '../../store/useFetch';
import { LoadingDots } from './../LoadingDots/LoadingDots ';

export interface IInputForm {
    username: string;
    from: string;
    text: string;
}

export const Form = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IInputForm>();

    const { fetching, mailSendingError, mailSent, sendEmail } = useFetch(state => state);

    const onSubmit: SubmitHandler<IInputForm> = data => {
        if (data) sendEmail(data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
                <span>01</span>
                <label>Lorem, ipsum.</label>
                <Controller
                    control={control}
                    name="username"
                    rules={{
                        required: { value: true, message: '* Это обязательно поле' },
                        minLength: { value: 2, message: '* Минимальная длина имени 2 символа' },
                        maxLength: { value: 20, message: '* Максимальная длина имени 20 символов' },
                    }}
                    render={() => <input className={styles.input} type="text" placeholder="Lorem, ipsum." {...register('username')} />}
                />
                {errors.username && <span className={styles.error}>{errors.username.message}</span>}
            </div>
            <div className={styles.item}>
                <span>02</span>
                <label>Lorem, ipsum.</label>
                <Controller
                    control={control}
                    name="from"
                    rules={{
                        required: { value: true, message: '* Это обязательно поле' },
                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: '* Неверный формат почты' },
                    }}
                    render={() => <input className={styles.input} type="email" placeholder="Lorem, ipsum." {...register('from')} />}
                />
                {errors.from && <span className={styles.error}>{errors.from.message}</span>}
            </div>
            <div className={styles.item}>
                <span>03</span>
                <label>Lorem, ipsum.</label>
                <Controller
                    control={control}
                    name="text"
                    rules={{
                        required: { value: true, message: '* Это обязательно поле' },
                        minLength: { value: 6, message: '* Минимальная длина сообщения 6 символов' },
                        maxLength: { value: 70, message: '* Максимальная длина сообщения 70 символов' },
                    }}
                    render={() => <textarea className={styles.input} placeholder="Lorem, ipsum." {...register('text')} />}
                />
                {errors.text && <span className={styles.error}>{errors.text.message}</span>}
            </div>
            <BigButtonRow stripe className={styles.row}>
                <Button fill>
                    {!fetching ? 'Отправить' : 'Отправка'} &nbsp;{fetching && <LoadingDots />}
                </Button>
            </BigButtonRow>
            <div className={styles.fetchMessage}>
                {mailSendingError && <p className={styles.fetchError}>Сервис временно недоступен!</p>}
                {mailSent && <p className={styles.fetchOk}>Сообщение успешно отправлено!</p>}
            </div>
        </form>
    );
};
