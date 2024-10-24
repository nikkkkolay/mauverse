import { useSpring, MotionValue } from 'framer-motion';
import { useLayoutEffect, useState } from 'react';

export const useMySpring = (value: MotionValue<number>, stiffness: number = 60, damping: number = 50) => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 780);
    const springValue = useSpring(value, { stiffness, damping });

    useLayoutEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 780);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? value : springValue;
};
