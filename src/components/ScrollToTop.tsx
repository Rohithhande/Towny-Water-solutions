import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Check if there is a hash (e.g., #contact) in the URL to avoid scrolling to top if user is looking for a section
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};
