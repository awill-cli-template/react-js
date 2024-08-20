import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "store/index";
import App from "./App.jsx";
import "assets/styles/tailwind.scss";
import "assets/styles/global.scss";
import "assets/styles/font.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
);
