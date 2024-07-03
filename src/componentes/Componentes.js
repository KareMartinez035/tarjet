import React from "react";
import Hola from "./Saludo";
import Iterador from "./iterante";
import Boton from "./boton";

const Componentes = ({ data = [] }) => (
    <div className="componentesContainer">
        <Hola username="Karen and Sofi" />
        <Iterador chao={data} />
        <Boton />
    </div>
);

export default Componentes;