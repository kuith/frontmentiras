import axios from 'axios';
import React, {useState} from 'react';

function NuevaJornada() {
  
  const [nombre, setNombre] = useState('');
  const [texto, settexto] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState('...trabajando');
 
  const handleSubmit =  async evt => {
    evt.preventDefault();
    ///axios///
    await axios.post('/jornada', {
      nombreJornada: nombre,
      textoJornada: texto,
      fechaJornada: fecha
    }).then(response => {
      if (response.status === "200 OK") {
        setMensaje("La jornada se ha grabado correctamente");
        }
      });
    console.log("nombre: " + nombre + ".Texto: " + texto + ". Fecha: " + fecha + ". Estado: " + mensaje)
  }

  return (
    <div className="container justify-content-center mt-4">
      <h3 className="titular mb-4">Nueva Jornada</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="InputNombre">Nombre</label>
          <input type="text"
            className="form-control"
            id="InputNombre"
            value = {nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputText">Texto</label>
          <textarea
            className="form-control"
            id="inputText"
            rows="3"
            value = {texto}
            onChange={e => settexto(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="InputFecha">Fecha</label>
          <input
            type="text"
            className="form-control"
            id="InputFecha"
            value = {fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>
        <button type="submit" className="btn bg-f0e3c7  border border-dark text-dark">Guardar Jornada</button>
      </form>
    </div>
  );
}
 
export default NuevaJornada;