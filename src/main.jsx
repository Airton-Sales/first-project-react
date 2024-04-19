import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./containers/Home/index.jsx";
import Users from "./containers/Users";
import GlobalStyle from "./globalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Users /> <GlobalStyle />
  </>
);
