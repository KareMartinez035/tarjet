import React from "react";
import Componentes from "../Componentes";
import useFetch from "../../Hook/hook";
import url from "../Config"

const ConteComponentes = () => {
    const { data, loading, error } = useFetch(`${url}/info`);

    if (loading) {
        return <p> Cargando...</p>;
    }

    if (error) {
        return <p>Error al cargar los datos: {error.message}</p>
    }

    return <Componentes data={Array.isArray(data) ? data : []} />
};

    export default ConteComponentes;