import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { MainPage, NotFound, ContactsPage, AboutPage } from './pages';
import { useSidebar } from './store/useSidebar';

const App = (): JSX.Element => {
    const isOpen = useSidebar(state => state.isActive);

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
