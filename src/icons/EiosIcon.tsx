import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';

interface Props {
    className?: string;
}

export const EiosIcon = motion(
    forwardRef(({ className }: Props, ref: ForwardedRef<SVGSVGElement>) => {
        return (
            <svg ref={ref} className={className} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" x="0" y="0" version="1.1" viewBox="0 0 20 20">
                <path
                    d="M19.24 6.03V4.08c0-1.84-1.37-3.33-3.06-3.33H3.78C2.09.75.72 2.24.72 4.08v11.86c0 1.84 1.37 3.33 3.06 3.33h12.4a3.06 3.06 0 0 0 3.06-3.06V6.03z"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.471"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="10" cy="7.27" r="3.52" fill="none" stroke="#000" strokeWidth="1.471" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    d="M15.47 19.27c0-3.02-2.45-5.47-5.47-5.47s-5.47 2.45-5.47 5.47"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.471"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }),
);
