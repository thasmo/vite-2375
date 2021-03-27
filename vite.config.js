import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    build: {
        manifest: true,
        rollupOptions: {
            input: 'src/main.ts',
        },
    },
    plugins: [legacy()],
});
