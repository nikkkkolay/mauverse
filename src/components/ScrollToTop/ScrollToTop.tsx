import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (!location.hash) {
            setTimeout(function () {
                window.scrollTo(0, 0);
            }, 1);
        }
    }, [pathname]);

    return null;
};
