import { defineConfig } from 'vite';

export default defineConfig({
    root: '.', // or the directory where `index.html` is located
    build: {
        outDir: 'dist', // output directory for the production build
    },
    // Optional: Add any other configurations or plugins
});
