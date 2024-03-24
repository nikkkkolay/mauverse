import { useSpring } from 'framer-motion';

export const useMySpring = (value: any) => {
    return useSpring(value, { stiffness: 1000, damping: 100 });
};
