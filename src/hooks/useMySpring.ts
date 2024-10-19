import { useSpring, MotionValue } from 'framer-motion';

export const useMySpring = (value: MotionValue<number>, stiffness: number = 80, damping: number = 25) => {
    return useSpring(value, { stiffness: stiffness, damping: damping });
};
