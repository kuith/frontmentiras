import React, { useState, useEffect } from "react";
import axios from "axios";


const Investigador = (props) => {
  //const images = require.context("../../util/images", false);

  const [investigadorDatos, setInvestigadorDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/investigador/${props.id}`);

      setInvestigadorDatos(result.data.investigador);
      console.log(result.data.investigador);
    };
    fetchData();
  }, [props.id]);
  
  //let img_src = images(`./${investigadorDatos.nombreImagen}`);
  const basicosImg = (
    <div className="col-md-2 ">
      <img
        className="rounded mx-auto d-block imgInvestigador"
        src={process.env.PUBLIC_URL + `../../util/images/${investigadorDatos.nombreImagen}`}
        //src={`../../util/images/${investigadorDatos.nombreImagen}`}
        //src={images(`${investigadorDatos.nombreImagen}`)}
        alt={investigadorDatos.nombre}
      />
    </div>
  );
  const basicosBasicos = (
    <div className="col-md-3 saltos margenDerecho margenIzquiedo ">
      <p className="h1">{investigadorDatos.nombre}</p>
      <p className="h3">Profesión: {investigadorDatos.profesion}</p>
      <p className="h3">Motivación: {investigadorDatos.motivacion}</p>
      <p>Salud: {investigadorDatos.salud}</p>
      <p>Estabilidad: {investigadorDatos.estabilidad}</p>
      <p>Cordura: {investigadorDatos.cordura}</p>
    </div>
  );
  const basicosBeneficios = (
    <div className="col-md saltos margenesInvestigadores ">
      <h3>Beneficios de la profesión</h3>
      {investigadorDatos.beneficios}
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
        {investigadorDatos.pilares}
      </div>
      <div className="col-md saltos  ">
        <h3>Fuentes de Estabilidad</h3>
        {investigadorDatos.fuentes}
      </div>
    </div>
  );
  const TranfondoPersonalidadVinculo = (
    <div className="row transfondo">
      <div className="col-md saltos margenDerecho ">
        <h3>Transfondo</h3>
        {investigadorDatos.trasfondo}
      </div>
      <div className="col-md saltos margenDerecho ">
        <h3>Personalidad</h3>
        {investigadorDatos.personalidad}
      </div>
      <div className="col-md saltos ">
        <h3>Vínculo</h3>
        {investigadorDatos.vinculo}
      </div>
    </div>
  );
  const AcademicasInterpersonalesTecnicas = (
    <div className="row transfondo">
      <div className="col-md saltos margenDerecho ">
        <h3>Habilidades Académicas</h3>
        {investigadorDatos.academicas}
      </div>
      <div className="col-md saltos margenDerecho ">
        <h3>Habilidades Interpersonales</h3>
        {investigadorDatos.interpersonales}
      </div>
      <div className="col-md saltos ">
        <h3>Habilidades Técnicas</h3>
        {investigadorDatos.tecnicas}
      </div>
    </div>
  );
  const habilidadesGenerales = (
    <div className="row transfondo">
      <div className="col-md saltos ">
        <h3>Habilidades Generales</h3>
        {investigadorDatos.generales}
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