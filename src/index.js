import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { VideosProvider, VideosContext } from "./contexts/VideosContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { VideosContext };

root.render(
  <StrictMode>
    <BrowserRouter>
      <VideosProvider>
        <App />
      </VideosProvider>
    </BrowserRouter>
  </StrictMode>
);
