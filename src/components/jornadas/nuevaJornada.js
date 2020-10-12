import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function NuevaJornada() {
  let history = useHistory();

  const [nombre, setNombre] = useState("");
  const [texto, settexto] = useState("");
  const [fecha, setFecha] = useState("");
  const [formValido, setFormValido] = useState(false);

    const validateDate = (e) => {
      if (!e.match(/^([1-9]|1[0-2])\-([1-9]|[12][0-9]|3[01])\-\d\d\d\d$/)) {
        alert("La fecha debe tener el formato mm-dd-aaaa");
        setFormValido(false);
      } else {
        setFormValido(true);
      }
    }

  const handleSubmit = async evt => {
    evt.preventDefault();
    console.log(formValido);
      ///axios///
    if(formValido) {
      await axios
        .post("/jornada", {
          nombreJornada: nombre,
          textoJornada: texto,
          fechaJornada: fecha
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });

        /* console.log("nombre: " + nombre
          + ".Texto: " + texto
          + ". Fecha: " + fecha); */

        //history.push("/", "?estado=pipo");
        history.push({
          pathname: "/general"
          //search: "intro"
        });
      }
    };

  return (
    <div className="container justify-content-center mt-4">
      <h3 className="titular mb-4">Nueva Jornada</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="InputNombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="InputNombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputText">Texto</label>
          <textarea
            className="form-control"
            id="inputText"
            rows="3"
            value={texto}
            onChange={e => settexto(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="InputFecha">Fecha</label>
          <input
            type="text"
            className="form-control"
            id="InputFecha"
            value={fecha}
            placeholder="mm-dd-aaaa"
            onChange={e => setFecha(e.target.value)}
            onBlur={e => validateDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn bg-f0e3c7  border border-dark text-dark"
        >
          Guardar Jornada
        </button>
      </form>
    </div>
  );
}
 
export default NuevaJornada;