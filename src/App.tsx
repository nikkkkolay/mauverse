import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components';
import { MainPage, NotFound, ContactsPage, AboutPage, AdminPage, NewsPage } from './pages';
import { useLayoutLoading } from './store/useLayoutLoading';
import { routs } from './routs';

const App = (): JSX.Element => {
    const { loading, setPathname } = useLayoutLoading(state => state);
    const location = useLocation();

    useEffect(() => {
        document.body.classList.toggle('overflow', loading);
    }, [loading]);

    useEffect(() => {
        const pathname = routs.find(rout => rout.path === location.pathname);
        setPathname(pathname?.name as string);
    }, [location.pathname]);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/news/:id" element={<NewsPage />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/404" element={<NotFound />} />
            </Route>
            <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
    );
};

export default App;
