import { theme as chakraTheme } from "@chakra-ui/react";

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
};

export default theme;
