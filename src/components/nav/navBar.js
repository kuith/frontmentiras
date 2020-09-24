import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const NavBar = () => {

  const [jornadasDatos, setJornadasDatos] = useState([]);
  const [investigadoresDatos, setInvestigadoresDatos] = useState([]);

  //'http://localhost:3001/api/jornada', modificado para intentar solucionar lo del cors
  //en el archivo package.json he añadido la linea /* "proxy": "http://localhost:3001/api" */
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/jornada");

      setJornadasDatos(result.data.jornadas);
      //console.log(result.data.jornadas);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/investigador");

      setInvestigadoresDatos(result.data.investigadores);
      //console.log(console.log(result.data.investigadores));
    };
    fetchData();
  }, []);

  //jornadas
  const jornadasNavItem = jornadasDatos.map(jornada => (
    <Link className="dropdown-item" key={jornada._id} to={`/jornada/${jornada._id}`}>
      {jornada.nombreJornada}
    </Link>
  ));
  const jornadasNav = (
    <li className="nav-item dropdown ">
      <Link
        className="nav-link dropdown-toggle text-dark"
        to="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Jornadas
      </Link>
      <div
        className="dropdown-menu elementoLista"
        aria-labelledby="navbarDropdownMenuLink"
      >
        {jornadasNavItem}
        <Link to="/jornada/nuevaJornada" className="dropdown-item">
          Nueva Jornada
        </Link>
      </div>
    </li>
  );

  //investigadores
  const investigadoresNavItem = investigadoresDatos.map(investigador => (
    <Link className="dropdown-item" key={investigador._id} to={`/investigadores/${investigador._id}`}>
      {investigador.nombre}
    </Link>
  ));
  const investigadoresNav = (
    <li className="nav-item dropdown ">
      <Link
        className="nav-link dropdown-toggle text-dark"
        to="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Investigadores
      </Link>
      <div
        className="dropdown-menu elementoLista"
        aria-labelledby="navbarDropdownMenuLink"
      >
        {investigadoresNavItem}
      </div>
    </li>
  );

  //Navbar
  const navBarTotal = (
    <nav className="navbar navbar-expand-sm ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon bg-warning text-dark"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link text-dark" to="/">
              Inicio <span className="sr-only">(current)</span>
            </Link>
          </li>
          {jornadasNav}
          {investigadoresNav}
        </ul>
      </div>
    </nav>
  );

  return (
    <div className="barraNavegacion">
      {navBarTotal}
      <hr />
    </div>
  );
}

export default NavBar;
