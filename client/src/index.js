import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { customTheme } from "./themes/customTheme";
import { ThemeProvider } from "@emotion/react";
import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
