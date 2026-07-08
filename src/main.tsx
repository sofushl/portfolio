import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StrictMode } from 'react';


const container = document.getElementById("root");

if (!container) {
    throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
