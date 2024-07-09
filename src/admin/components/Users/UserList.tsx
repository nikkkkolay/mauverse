import { Box } from '@mui/material';
import { List, Datagrid, TextField, EditButton, EmailField, DeleteButton, WithRecord } from 'react-admin';

export const UserList = () => {
    return (
        <List title="Список пользователей" exporter={false}>
            <Datagrid>
                <TextField source="fullName" label="Имя" />
                <EmailField source="email" label="Почта" />
                <WithRecord
                    render={record => (
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                            <EditButton disabled={record.userId === 1} />
                            <DeleteButton disabled={record.userId === 1} />
                        </Box>
                    )}
                />
            </Datagrid>
        </List>
    );
};
