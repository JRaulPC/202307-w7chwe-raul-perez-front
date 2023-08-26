import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from ".";
import App from "./components/App/App";
import "./css/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
