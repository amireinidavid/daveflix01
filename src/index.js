import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "swiper/css";
import "swiper/css/pagination";
import "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import Preloader from "./components/Preloaders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
