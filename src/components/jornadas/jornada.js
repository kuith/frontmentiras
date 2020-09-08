import React from 'react';
import { jornadas } from '../../util/dataUtil/datos';

const Jornada = (props) => {
  const jornadaActual = jornadas[props.id]; //recuperar de la base de datos.
  
  return (
    <div className="mainContainer">
      <div className="row">
        <div className="col-sm text-left"><h3>{jornadaActual.nombre}</h3></div>
        <div className="col-sm text-right"><h6>{jornadaActual.fecha}</h6></div>
      </div>
      <div className="row saltos jornada">{jornadaActual.texto}</div>
    </div>
  )
}

export default Jornada;