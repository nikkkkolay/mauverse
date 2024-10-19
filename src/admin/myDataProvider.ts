import restProvider from 'ra-data-json-server';
import { withLifecycleCallbacks, fetchUtils } from 'react-admin';

import { API_URL } from './../../http';

// Функция для создания HTTP клиента с авторизацией
export const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const auth = JSON.parse(localStorage.getItem('auth') as string);
    options.headers.set('Authorization', `Bearer ${auth.accessToken}`);

    return fetchUtils.fetchJson(url, options);
};

// Конфигурация dataProvider с использованием withLifecycleCallbacks
const myDataProvider = withLifecycleCallbacks(restProvider(API_URL, httpClient), [
    {
        resource: 'posts',
        beforeSave: async params => {
            if (params.pictures) {
                const newPictures = params.pictures.filter((p: { rawFile: Blob }) => p.rawFile);
                const formerPictures = params.pictures.filter((p: { rawFile: Blob }) => !p.rawFile);
                const base64Pictures = await Promise.all(newPictures.map(convertFileToBase64));

                const pictures = [
                    ...formerPictures,
                    ...base64Pictures.map((dataUrl, index) => ({
                        src: dataUrl,
                        title: newPictures[index].title,
                    })),
                ];

                return {
                    ...params,
                    pictures,
                };
            }
            return params; // Возвращаем параметры без изменений, если нет картинок
        },
    },
]);

// Функция для преобразования файла в base64
const convertFileToBase64 = (file: { rawFile: Blob }) => {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file.rawFile);
    });
};

export default myDataProvider;
