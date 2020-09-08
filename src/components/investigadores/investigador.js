import React from 'react';

import { investigadores } from '../../util/dataUtil/datos';

const Investigador = (props) => {
  const investigadorActual = investigadores[props.id]; //recuperar de la base de datos.
  
  const basicosImg = (
    <div className="col-md-2 ">
      <img className="rounded mx-auto d-block imgInvestigador"
        src={require(`../../util/images/${investigadorActual.nombreImagen}`)}
        alt={investigadorActual.nombre}
      />
    </div>
  );
  const basicosBasicos = (
    <div className="col-md-3 saltos margenDerecho margenIzquiedo ">
      <p className="h1">{investigadorActual.nombre}</p>
      <p className="h3">Profesión: {investigadorActual.profesion}</p>
      <p className="h3">Motivación: {investigadorActual.motivacion}</p>
      <p>Salud: {investigadorActual.salud}</p>
      <p>Estabilidad: {investigadorActual.estabilidad}</p>
      <p>Cordura: {investigadorActual.cordura}</p>
    </div>
  );
  const basicosBeneficios = (
    <div className="col-md saltos margenesInvestigadores ">
      <h3>Beneficios de la profesión</h3>
      {investigadorActual.beneficios}
    </div>
  );
  const basicos = (
    <div className="row">
      {basicosImg}
      {basicosBasicos}
      {basicosBeneficios}
    </div>
  );

  const pilaresFuentes = (
    <div className="row transfondo">
      <div className="col-md saltos margenDerecho ">
        <h3>Pilares de Cordura</h3>
        {investigadorActual.pilares}
      </div>
      <div className="col-md saltos  ">
        <h3>Fuentes de Estabilidad</h3>
        {investigadorActual.fuentes}
      </div>
    </div>
  );
  const TranfondoPersonalidadVinculo = (
    <div className="row transfondo">
      <div className="col-md saltos margenDerecho ">
        <h3>Transfondo</h3>
        {investigadorActual.trasfondo}
      </div>
      <div className="col-md saltos margenDerecho ">
        <h3>Personalidad</h3>
        {investigadorActual.personalidad}
      </div>
      <div className="col-md saltos ">
        <h3>Vínculo</h3>
        {investigadorActual.vinculo}
      </div>
    </div>
  );
  const AcademicasInterpersonalesTecnicas = (
    <div className="row transfondo">
      <div className="col-md saltos margenDerecho ">
        <h3>Habilidades Académicas</h3>
        {investigadorActual.academicas}
      </div>
      <div className="col-md saltos margenDerecho ">
        <h3>Habilidades Interpersonales</h3>
        {investigadorActual.interpersonales}
      </div>
      <div className="col-md saltos ">
        <h3>Habilidades Técnicas</h3>
        {investigadorActual.tecnicas}
      </div>
    </div>
  );
  const habilidadesGenerales = (
    <div className="row transfondo">
      <div className="col-md saltos ">
        <h3>Habilidades Generales</h3>
        {investigadorActual.generales}
      </div>
    </div>
  );
  return (
    <div className="mainContainer">
      {basicos}
      {pilaresFuentes}
      {TranfondoPersonalidadVinculo}
      {AcademicasInterpersonalesTecnicas}
      {habilidadesGenerales}
    </div>
  )
}

export default Investigador;