import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, BooleanField } from 'react-admin';

export const DocsList = () => {
    return (
        <List title="Список документов" exporter={false}>
            <Datagrid>
                <TextField source="id" />
                <BooleanField label="Автивность" source="active" />
                <TextField source="title" label="Название" />
                <DateField source="published_at" label="Дата публикации" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    );
};
