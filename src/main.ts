import ChakraUI, { extendChakra } from "@chakra-ui/vue-next";
import { createApp } from "vue";
import App from "./App.vue";
import { extendedTheme } from "./theme";

createApp(App)
  .use(
    ChakraUI,
    extendChakra({
      extendTheme: extendedTheme,
      cssReset: true,
    })
  )
  .mount("#app");
