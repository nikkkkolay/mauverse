import { List, Datagrid, TextField, EditButton, EmailField, DeleteButton } from 'react-admin';

export const UserList = (props: any) => {
    console.log(props);

    return (
        <List {...props} title="Список пользователей" exporter={false}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="fullName" label="Имя" />
                <EmailField source="email" label="Почта" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    );
};
