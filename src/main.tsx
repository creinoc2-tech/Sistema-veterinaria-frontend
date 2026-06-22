import React from "react";
import "./index.css";
import { MyRoutes } from "./router/router.tsx";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MyRoutes />
    </React.StrictMode>,
  );
} else {
  console.error("No se encontró el elemento con ID 'root'");
}
