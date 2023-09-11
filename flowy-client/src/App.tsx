import React from "react";
import Router from "./router/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
};

export default App;
