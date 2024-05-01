import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components';
import { MainPage, NotFound, ContactsPage, AboutPage } from './pages';
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
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default App;
