import { fileURLToPath, URL } from "node:url";
// @ts-ignore
import { componentResolver } from "@chakra-ui/vue-auto-import";
import Components from "unplugin-vue-components/vite";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Components({ resolvers: [componentResolver] })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
