import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider resetCSS>{element}</ChakraProvider>;
};
