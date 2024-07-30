import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { AdviceApp } from "./Components/AdviceApp";
// import { RegFrm } from "./Components/RegFrm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RegFrm /> */}
    <AdviceApp />
  </React.StrictMode>
);
