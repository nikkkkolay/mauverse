import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';

interface Props {
    className?: string;
}

export const TimetableIcon = motion(
    forwardRef(({ className }: Props, ref: ForwardedRef<SVGSVGElement>) => {
        return (
            <svg ref={ref} className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_47_113)">
                    <path
                        d="M19.26 7.12001V5.32001C19.26 3.63001 17.89 2.26001 16.2 2.26001H3.79999C2.10999 2.26001 0.73999 3.63001 0.73999 5.32001V16.21C0.73999 17.9 2.10999 19.27 3.79999 19.27H6.25999"
                        stroke="black"
                        strokeWidth="1.471"
                        stroke-Linecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M5.55005 0.75V1.58" stroke="black" strokeWidth="1.471" stroke-Linecap="round" strokeLinejoin="round" />
                    <path d="M14.6501 0.75V1.58" stroke="black" strokeWidth="1.471" stroke-Linecap="round" strokeLinejoin="round" />
                    <path d="M0.209961 7.12H20" stroke="black" strokeWidth="1.471" />
                    <path d="M4.30005 11.02H11.32" stroke="black" strokeWidth="1.471" stroke-Linecap="round" strokeLinejoin="round" />
                    <path d="M4.30005 15.21H7.39005" stroke="black" strokeWidth="1.471" stroke-Linecap="round" strokeLinejoin="round" />
                    <path
                        d="M17.96 10.11C18.05 10.11 18.22 10.13 18.36 10.28C18.58 10.5 18.58 10.87 18.36 11.09L11.32 18.13C11.16 18.29 10.94 18.39 10.71 18.41L10.18 18.46L10.23 17.93C10.25 17.7 10.35 17.48 10.51 17.32L17.55 10.28C17.7 10.13 17.87 10.11 17.96 10.11ZM17.96 8.64001C17.44 8.64001 16.91 8.84001 16.52 9.24001L9.48005 16.28C9.07005 16.69 8.82005 17.23 8.77005 17.8L8.65005 19.16C8.60005 19.61 8.97005 20 9.42005 20C9.44005 20 9.47005 20 9.49005 20L10.85 19.88C11.42 19.83 11.96 19.58 12.37 19.17L19.41 12.13C20.21 11.33 20.21 10.04 19.41 9.24001C19 8.84001 18.48 8.64001 17.96 8.64001Z"
                        fill="black"
                    />
                </g>
                <defs>
                    <rect fill="white" strokeWidth="1.471" stroke-Linecap="round" strokeLinejoin="round" />
                </defs>
            </svg>
        );
    }),
);
