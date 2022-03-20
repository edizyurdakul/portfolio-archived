import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("whiteAlpha.800", "gray.800")(props),
      },
      _selection: {
        bg: "yellow",
        color: "blue",
      },
    }),
  },
});

export default theme;
