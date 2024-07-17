import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import { Layout } from './components';
import { MainPage, NotFound, ContactsPage, AboutPage, AdminPage, NewsPage } from './pages';
import { useLayoutLoading } from './store/useLayoutLoading';
import { transitionPathname, transitionRoutes } from './routs';

const App = (): JSX.Element => {
    const { loading, setPathname } = useLayoutLoading(state => state);
    const location = useLocation();

    useEffect(() => {
        document.body.classList.toggle('overflow', loading);
    }, [loading]);

    useEffect(() => {
        const pathname = transitionPathname(location.pathname, transitionRoutes);
        setPathname(pathname as any);
    }, [location.pathname]);

    // Проверка на административный маршрут, т.к. key внутри routes при смене маршрута размонтирует компонент и переход внутри Admin перезагрузит страницу
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={isAdminRoute ? undefined : location.pathname}>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/news" element={<Navigate replace to="/" />} />
                    <Route path="/news/:id" element={<NewsPage />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate replace to="/404" />} />
                </Route>
                <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default App;
