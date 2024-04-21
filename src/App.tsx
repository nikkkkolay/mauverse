import { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components';
import { MainPage, NotFound, ContactsPage, AboutPage } from './pages';
import { useLayoutLoading } from './store/useLayoutLoading';
import { AnimatePresence } from 'framer-motion';

const App = (): JSX.Element => {
    const loading = useLayoutLoading(state => state.loading);

    const location = useLocation();

    useEffect(() => {
        document.body.classList.toggle('overflow', loading);
    }, [loading]);

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
