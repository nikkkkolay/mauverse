import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components';
import { MainPage, NotFound, ContactsPage, AboutPage } from './pages';
import { useEffect } from 'react';
import { useSidebar } from './store/useSidebar';

const App = (): JSX.Element => {
    const { pathname } = useLocation();
    const isOpen = useSidebar(state => state.isActive);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        document.body.classList.toggle('overflow', isOpen);
    }, [isOpen]);

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
