import { Admin, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import myDataProvider from '../../admin/myDataProvider';
import authProvider from '../../admin/authProvider';
import styles from './AdminPage.module.css';

import { PostList, PostCreate, PostEdit } from '../../admin/components';

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

export const AdminPage = () => {
    return (
        <div className={styles.adminContainer}>
            <Admin dataProvider={myDataProvider} basename="/admin" i18nProvider={i18nProvider} authProvider={authProvider}>
                <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} options={{ label: 'Новости' }} icon={NewspaperIcon} />
            </Admin>
        </div>
    );
};
