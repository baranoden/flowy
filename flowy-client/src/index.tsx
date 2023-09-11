import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import InterProvider from "./libs/languageFunc/InterProvider";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <InterProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </InterProvider>
    </Provider>
  </BrowserRouter>
);
