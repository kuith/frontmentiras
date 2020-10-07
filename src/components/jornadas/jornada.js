import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const Jornada = (props) => {
 
  const [jornadaDatos, setJornadaDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/jornada/${props.id}`);

      setJornadaDatos(result.data.jornada);
      console.log(result.data.jornada._id);
    };
    fetchData();
  }, [props.id]);
  
  function fechaCorta(fecha) {
    return moment(fecha).format("LL");
  }
  return (
    <div className="mainContainer">
      <div className="row">
        <div className="col-sm text-left">
          <h3>{jornadaDatos.nombreJornada}</h3>
        </div>
        <div className="col-sm text-right">
          <h6>{fechaCorta(jornadaDatos.fechaJornada)}</h6>
        </div>
      </div>
      <div className="row saltos jornada">{jornadaDatos.textoJornada}</div>
    </div>
  );
}

export default Jornada;