import { useSpring } from 'framer-motion';

export const useMySpring = (value: any) => {
    return useSpring(value, { stiffness: 100, damping: 30 });
};
