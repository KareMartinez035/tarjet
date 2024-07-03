import React from "react";
import Imagen from "./IMG/bob.png" 

const Card = ({ title, descrip, imag, leftColor, rightColor })=>(
    <div>
        <div style= {{ backgroundImage: `url(), linear-gradient(to right, ${leftColor ||'#338fda'}, ${rightColor || '#c16a7f'})`, padding: '2px 0px 20px', borderRadius:'10px' }}>
            <h1 style={{color:"#f7f7f7"}}>{title}</h1>
            <img src={imag || Imagen} alt="" style={{borderRadius:'10px', width:"250px",height:"300px"}} />
            <p style={{color:"#f7f7f7"}}>{descrip}</p> 
        </div>
    </div>
)


export default Card;
