import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
        <>
            <Routes>
                <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route element={<Layout />}>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/news/:id" element={<NewsPage />} />
                        <Route path="/404" element={<NotFound />} />

                        {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    );
};

export default App;
