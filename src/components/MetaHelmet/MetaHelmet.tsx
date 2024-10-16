import { Helmet } from 'react-helmet';

interface IMetaHelmet {
    title: string;
    description?: string;
    keywords?: string;
}

export const MetaHelmet = ({ title, keywords, description }: IMetaHelmet): JSX.Element => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
};
