import { createChakra } from "@chakra-ui/vue-next";
import { createApp } from "vue";
import App from "./App.vue";
import { extendedTheme } from "./theme";

const ChakraUI = createChakra({
  extendTheme: extendedTheme,
  cssReset: true,
});

createApp(App).use(ChakraUI).mount("#app");
