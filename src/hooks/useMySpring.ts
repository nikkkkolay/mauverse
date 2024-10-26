import { useSpring, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export const useMySpring = (value: MotionValue<number>, stiffness: number = 100, damping: number = 30, mass: number = 1) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 780);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mobileSettings = isMobile ? { stiffness: 200, damping: 40, mass: 0.8 } : { stiffness, damping, mass };
    const springValue = useSpring(value, mobileSettings);

    return springValue;
};
