import { extendTheme } from "@chakra-ui/vue-next";
import { Button, IconButton } from "./components";
import { globalStyles } from "./global-styles";
import { semanticTokens } from "./semantic-tokens";
import "@fontsource/ibm-plex-mono";
import "@fontsource/dm-sans";
import "@fontsource/dm-sans/700.css";
import "@fontsource/dm-sans/400.css";

export const extendedTheme = extendTheme({
  fonts: {
    heading: "DM Sans, sans-serif",
    body: "DM Sans, sans-serif",
    mono: "IBM Plex Mono",
  },
  colors: {
    velvet: {
      50: "#ffe2ec",
      100: "#ffb3c5",
      200: "#fc839f",
      300: "#f95278",
      400: "#f62252",
      500: "#dd0939",
      600: "#ad032c",
      700: "#7c001e",
      800: "#4d0012",
      900: "#200005",
    },
  },
  components: {
    Button,
    IconButton,
  },
  styles: {
    global: globalStyles,
  },

  semanticTokens,
});
