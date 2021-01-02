import React from "react";
import { ChakraProvider } from "@chakra-ui/react";


export const wrapRootElement = ({ element }, themeOptions) => {
  return <ChakraProvider resetCSS>{element}</ChakraProvider>;
};
