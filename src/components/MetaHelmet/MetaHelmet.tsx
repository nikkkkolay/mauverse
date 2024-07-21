import { Helmet } from 'react-helmet';

interface IMetaHelmet {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    type?: string;
    image?: string;
}

export const MetaHelmet = ({ title, keywords, description, canonical, type, image }: IMetaHelmet): JSX.Element => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Lorem" />
            {canonical && <link rel="canonical" href={canonical} />}
            {canonical && <meta property="og:url" content={canonical} />}
            {type && <meta property="og:type" content={type} />}
            {image && <meta property="og:image" content={image} />}
        </Helmet>
    );
};
