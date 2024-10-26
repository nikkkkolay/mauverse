import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'mui-vendor': ['@mui/material', '@mui/icons-material'],
                    'react-vendor': ['react', 'react-dom', 'react-router-dom', 'react-helmet', 'zustand'],
                    'motion-vendor': ['framer-motion', '@motionone/utils'],
                    'data-handling': [
                        'axios',
                        'ra-data-json-server',
                        'ra-data-simple-rest',
                        'ra-i18n-polyglot',
                        'ra-input-rich-text',
                        'ra-language-russian',
                        'react-hook-form',
                    ],
                    'admin-panel': ['react-admin'],
                },
            },
        },
    },
});
