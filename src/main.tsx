import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
