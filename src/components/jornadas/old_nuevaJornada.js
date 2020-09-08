import React from 'react';
import { useForm } from 'react-hook-form';

function NuevaJornada() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="container justify-content-center mt-4">
      <h3 className="titular mb-4">Nueva Jornada</h3>
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="jornada-group">
              <label>Nombre de la jornada</label>
              <input type="text"
                ref={register({ maxLength: 50 })}
                name="nombre"
                className="form-control"
                id="formGroupNombreJornadaInput"
                placeholder="Nombre de la jornada (necesario)"
                required
              />
              {errors.nombreJornada && <p>El número máximo de caracteres es 50</p>}
            </div>
            <div className="form-group">
              <label>Texto de la jornada</label>
              <input type="text"
                name="texto"
                className="form-control"
                id="formTextoJornadaInput"
                placeholder="Texto (necesario)"
                required
              />
            </div>
            <div className="form-group">
              <label>Fecha de la jornada</label>
              <input type="text"
                name="fecha"
                className="form-control"
                id="formJornadaFechaInput"
                placeholder="Fecha de la jornada (necesario)"
                required
              />
             </div>
            <button type="submit" className="btn bg-info">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NuevaJornada;