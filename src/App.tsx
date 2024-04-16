import { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components';
import { MainPage, NotFound, ContactsPage, AboutPage } from './pages';
import { useLayoutLoading } from './store/useLayoutLoading';

const App = (): JSX.Element => {
    const loading = useLayoutLoading(state => state.loading);
    const setLoading = useLayoutLoading(state => state.setLoading);

    const { pathname } = useLocation();

    useEffect(() => {
        document.body.classList.toggle('overflow', loading);
    }, [loading]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        setLoading();
    }, [pathname]);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
