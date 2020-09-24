import React from 'react';
import NavBar from '../nav/navBar';

const Header = () => {
  //img//
  const imagenCabecera = (
    <img
      className="container-fluid imgCabecera"
      src={process.env.PUBLIC_URL + `/images/periodico.png`}
      alt="Periodico"
    />
  );
  //jornadas

  return (
    <div>
      {imagenCabecera}
      <NavBar />
    </div>
  )
}

export default Header;
