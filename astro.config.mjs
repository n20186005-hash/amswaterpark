import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({site:"https://amswaterpark.com",output:"static",trailingSlash:"always",vite:{plugins:[tailwindcss()]},integrations:[sitemap({filter:page=>['/','/en/'].includes(new URL(page).pathname)})]});
