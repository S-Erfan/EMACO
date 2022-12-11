import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ThemeProvider } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
      <Provider store={store}>
          <App />
          <div className="ground-cus"></div>
          <ToastContainer rtl />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
