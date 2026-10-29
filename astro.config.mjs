import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({site:"https://amswaterpark.com",output:"static",trailingSlash:"always",vite:{plugins:[tailwindcss()]},integrations:[sitemap({filter:page=>{const p=new URL(page).pathname;return p==='/'||p==='/en/'||p==='/topik/'||p.startsWith('/topik/');}})]});
