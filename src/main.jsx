import { ThemeProvider } from "@material-tailwind/react";
import StyledEngine, { StyledEngineProvider } from "@mui/styled-engine";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
