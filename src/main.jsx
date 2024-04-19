import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/globalStyle.js";
import MyRoutes from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <MyRoutes /> <GlobalStyle />
  </>)