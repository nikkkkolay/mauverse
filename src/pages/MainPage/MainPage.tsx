import { MetaHelmet } from '../../components';
import { AboutSection, NewsSection } from '../../sections';

export const MainPage = (): JSX.Element => {
    return (
        <>
            <MetaHelmet title={'MAUverse'} />
            <AboutSection />
            <NewsSection />
        </>
    );
};
