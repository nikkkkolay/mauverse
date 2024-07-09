import { Edit, SimpleForm, TextInput, required, useEditController } from 'react-admin';
import { Grid, Box } from '@mui/material';

export const UserEdit = (props: any) => {
    return (
        <Edit title="Редактировать пользователя">
            <SimpleForm>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <TextInput source="fullName" label="Имя" validate={[required()]} fullWidth />
                            <TextInput source="email" label="Почта" validate={[required()]} fullWidth />
                            <TextInput source="password" label="Пароль" validate={[required()]} fullWidth defaultValue="" />
                        </Grid>
                    </Grid>
                </Box>
            </SimpleForm>
        </Edit>
    );
};
