import { useLayoutEffect } from 'react';
import { Edit, SimpleForm, TextInput, required, PasswordInput, useRecordContext, WithRecord } from 'react-admin';
import { Grid, Box, Typography } from '@mui/material';

const EmptyPasswordInput = () => {
    const record = useRecordContext();

    useLayoutEffect(() => {
        record.password = '';
    }, [record]);

    return <PasswordInput source="password" label="Пароль" validate={[required()]} fullWidth />;
};

export const UserEdit = () => {
    return (
        <Edit title="Редактировать пользователя">
            <SimpleForm>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2 }}>
                        <Grid item xs={12} sm={6}>
                            <WithRecord
                                render={record => (
                                    <Typography variant="h6" component="h6" sx={{ marginBottom: 2 }}>
                                        {`Логин: ${record.email}`}
                                    </Typography>
                                )}
                            />
                            <TextInput source="fullName" label="Имя" validate={[required()]} fullWidth />
                            <EmptyPasswordInput />
                        </Grid>
                    </Grid>
                </Box>
            </SimpleForm>
        </Edit>
    );
};
