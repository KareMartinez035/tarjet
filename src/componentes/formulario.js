import React from "react";
import './CSS/Formulario.css';


const Formulario =({ onChange, formu, onSubmit })=>(
    <div className="form-container">
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Titulo: </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Titulo de tu tarjeta"
                            onChange={onChange}
                            value={formu.title}
                        />
                    </div>
                    <div>
                        <label>URL imagen: </label>
                        <input
                            type="text"
                            name="imag"
                            placeholder="Imagen aquí!!"
                            onChange={onChange}
                            value={formu.imag}
                        />
                    </div>
                    <div>
                        <label>Contenido: </label>
                        <input
                            type="text"
                            name="descrip"
                            placeholder="Escribe aquí!!"
                            onChange={onChange}
                            value={formu.descrip}
                        />
                    </div>
                    <div>
                        <label>Color1: </label>
                        <input
                            type="text"
                            name="leftColor"
                            placeholder="Color aquí!!"
                            onChange={onChange}
                            value={formu.leftColor}
                        />
                    </div>
                    <div>
                        <label>Color2: </label>
                        <input
                            type="text"
                            name="rightColor"
                            placeholder="Color aquí!!"
                            onChange={onChange}
                            value={formu.rightColor}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>


           
)

export default Formulario