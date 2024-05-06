import React from "react";
import { createRoot } from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './components/slice/store';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);