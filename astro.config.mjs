// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    base: '/InHousePeru-Landing1',
    site: 'https://DoubleLiffT.github.io',
    vite: {
        plugins: [tailwindcss()],
    },
});
