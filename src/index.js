import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

import App from "./App.js";
import { StoreProvider } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
