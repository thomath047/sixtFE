// Core
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Components
import Dashboard from "@/pages/Dashboard";

// Styles
import {GlobalStyle} from './gobalStyle'

// Others
import { store } from "@/app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <Dashboard />
    </Provider>
  </React.StrictMode>
);
