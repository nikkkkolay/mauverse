import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (!location.hash) {
            const timer = setTimeout(function () {
                window.scrollTo(0, 0);
                return () => {
                    clearTimeout(timer);
                };
            }, 1);
        }
    }, [pathname]);

    return null;
};
