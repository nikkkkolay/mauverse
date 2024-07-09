import { Create, SimpleForm, TextInput, required } from 'react-admin';
import { Grid, Box } from '@mui/material';

export const UserCreate = () => {
    return (
        <Create title="Создать пользователя">
            <SimpleForm>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <TextInput source="fullName" label="Имя" validate={[required()]} fullWidth />
                            <TextInput source="email" label="Почта" validate={[required()]} fullWidth />
                            <TextInput source="password" label="Пароль" validate={[required()]} fullWidth />
                        </Grid>
                    </Grid>
                </Box>
            </SimpleForm>
        </Create>
    );
};
