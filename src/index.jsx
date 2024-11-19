// frameworks
import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";

// components
import App from "./App";

// adding bootstrap 

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/bootstrap-custom.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./assets/styles/index.css";

library.add(fas, far, fab);
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);