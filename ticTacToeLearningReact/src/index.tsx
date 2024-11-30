import React, {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import "./styles.css"

import App from "./App"
const rootElement = document.getElementById("root")
rootElement && createRoot(rootElement).render(
    <StrictMode>
    <App />
    </StrictMode>
); 