import React from "react";
import { createRoot } from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
