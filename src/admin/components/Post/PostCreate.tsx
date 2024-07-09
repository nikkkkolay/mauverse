import { Create, SimpleForm, TextInput, DateInput, required, BooleanInput, ImageInput, ImageField } from 'react-admin';
import { Grid, Box } from '@mui/material';
import { MyRichTextInput } from './MyRichTextInput';

export const PostCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2 }}>
                        <Grid item xs={12}>
                            <BooleanInput label="Автивность" source="active" defaultValue={true} />
                        </Grid>
                        <Grid item md={4}>
                            <DateInput source="published_at" label="Дата публикации" validate={[required()]} defaultValue={new Date()} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput source="title" label="Заголовок" validate={[required()]} fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput source="announcement" label="Анонс" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <MyRichTextInput validate={[required()]} fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <ImageInput
                                source="pictures"
                                label="Фото"
                                placeholder="Перетащите изображения сюда или нажмите для выбора. (Можно загрузить несколько файлов)"
                                multiple
                            >
                                <ImageField source="src" title="title" />
                            </ImageInput>
                        </Grid>
                    </Grid>
                </Box>
            </SimpleForm>
        </Create>
    );
};
