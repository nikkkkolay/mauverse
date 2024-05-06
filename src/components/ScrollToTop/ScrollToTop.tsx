import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};
