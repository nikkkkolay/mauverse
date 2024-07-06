import restProvider from 'ra-data-json-server';
import { withLifecycleCallbacks, fetchUtils } from 'react-admin';

const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const auth = JSON.parse(localStorage.getItem('auth') as string);
    options.headers.set('Authorization', `Bearer ${auth.accessToken}`);
    return fetchUtils.fetchJson(url, options);
};

const myDataProvider = withLifecycleCallbacks(restProvider(import.meta.env.VITE_JSON_SERVER_URL, httpClient), [
    {
        resource: 'posts',
        beforeSave: async params => {
            if (params.pictures) {
                const newPictures = params.pictures.filter((p: { rawFile: Blob }) => p.rawFile);
                const formerPictures = params.pictures.filter((p: { rawFile: Blob }) => !p.rawFile);
                const base64Pictures = await Promise.all(newPictures.map(convertFileToBase64));

                const pictures = [
                    ...base64Pictures.map((dataUrl, index) => ({
                        src: dataUrl,
                        title: newPictures[index].title,
                    })),
                    ...formerPictures,
                ];

                return {
                    ...params,
                    pictures,
                };
            }
            if (params.image) {
                const base64image = await Promise.resolve(convertFileToBase64(params.image));

                const image = {
                    src: base64image,
                    title: params.image.title,
                };

                return {
                    ...params,
                    image,
                };
            }
            return {
                ...params,
            };
        },
    },
]);

const convertFileToBase64 = (file: { rawFile: Blob }) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file.rawFile);
    });
};

export default myDataProvider;
