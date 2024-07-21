import { MetaHelmet } from '../../components';
import { AboutSection, NewsSection } from '../../sections';

export const MainPage = (): JSX.Element => {
    return (
        <>
            <MetaHelmet title={'Lorem'} description={'Lorem ipsum'} />
            <AboutSection />
            <NewsSection />
        </>
    );
};
