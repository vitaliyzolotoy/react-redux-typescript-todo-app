import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import { createRoot } from 'react-dom/client';
import CssBaseline from "@material-ui/core/CssBaseline";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <CssBaseline />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
