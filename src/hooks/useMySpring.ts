import { useSpring } from 'framer-motion';

export const useMySpring = (value: any, stiffness: number = 130, damping: number = 30) => {
    return useSpring(value, { stiffness: stiffness, damping: damping });
};
