import { motion } from 'framer-motion';
import { ForwardedRef, forwardRef } from 'react';

interface Props {
    className?: string;
}

export const ServicesIcon = motion(
    forwardRef(({ className }: Props, ref: ForwardedRef<SVGSVGElement>) => {
        return (
            <svg
                ref={ref}
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 20 20"
                xmlSpace="preserve"
            >
                <g>
                    <path
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.471"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.03,9.26h-5c-1.23,0-2.23-1-2.23-2.23V2.98c0-1.23,1-2.23,2.23-2.23h5c1.23,0,2.23,1,2.23,2.23v4.05   C19.27,8.26,18.27,9.26,17.03,9.26z"
                    />
                    <line
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.471"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        x1="9.79"
                        y1="3.98"
                        x2="19.27"
                        y2="3.98"
                    />
                </g>
                <g>
                    <path
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.471"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.98,19.26h-5c-1.23,0-2.23-1-2.23-2.23v-4.05c0-1.23,1-2.23,2.23-2.23h5c1.23,0,2.23,1,2.23,2.23v4.05   C10.21,18.26,9.21,19.26,7.98,19.26z"
                    />
                    <line
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.471"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        x1="0.74"
                        y1="13.98"
                        x2="10.21"
                        y2="13.98"
                    />
                </g>
                <g>
                    <path
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.471"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.96,7.83V3.68c0-1.62,1.32-2.94,2.94-2.94h1.6"
                    />
                    <polyline
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.471"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="0.75,5.75 2.95,8.17 5.08,5.75  "
                    />
                </g>
                <g>
                    <path
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.471"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.06,12.18v4.14c0,1.62-1.32,2.94-2.94,2.94h-1.6"
                    />
                    <polyline
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.471"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="19.27,14.25 17.07,11.83 14.94,14.25  "
                    />
                </g>
            </svg>
        );
    }),
);
