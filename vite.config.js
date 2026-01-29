import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react(), tailwindcss()],
        root: ".",
        build: {
            outDir: 'build',
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@core": path.resolve(__dirname, "src/core"),
                "@shared": path.resolve(__dirname, "src/shared"),
                "@integrations": path.resolve(__dirname, "src/integrations"),
                "@store": path.resolve(__dirname, "src/store"),
                "@libs": path.resolve(__dirname, "libs"),
            },
        },
        define: {
            __APP_VERSION__: JSON.stringify(env.npm_package_version),
        },
        test: {
            setupFiles: './test/setupTest.js',
            global: true,
            environment: 'jsdom',
            coverage: {
                provider: 'v8',
                reporter: ['text', 'html'],
                include: ['src/**/*.{js,jsx}'],
            },
        },
    }
});
