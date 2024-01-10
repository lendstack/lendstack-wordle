import {
  extendTheme,
  ThemeConfig,
  ComponentStyleConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const PinInputFieldStyle: ComponentStyleConfig = {
  variants: {
    secondary: {
      color: "#fff",
      boxSize: "60px",
      fontSize: "25px",
      backgroundColor: "gray.200",
      fontWeight: "600",
    },
  },
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "#F8F9FD",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#E0E0E0",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#555",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
        },
      },
    },
  },
  colors: {
    green: {
      500: "#79B851",
    },
    yellow: {
      500: "#f3c237",
    },
    gray: {
      200: "#a4aec4",
    },
  },
  components: {
    PinInputField: PinInputFieldStyle,
  },
});

export default theme;
