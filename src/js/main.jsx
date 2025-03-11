import React from "react"; //biblioteca principal de react
import ReactDOM from "react-dom/client"; //renderiza aplicacion en navegador
import "../styles/index.css"; // Importa los estilos
import App from "./components/App"; // Importa el componente principal

//renderizamos la aplicacion
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);