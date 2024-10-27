import { useSpring, MotionValue } from 'framer-motion';

export const useMySpring = (value: MotionValue<number>, stiffness: number = 140, damping: number = 30, mass: number = 1) => {
    return useSpring(value, { stiffness, damping, mass });
};
