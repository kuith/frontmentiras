import React from 'react';
import periodico from '../../util/images/periodico.png';
import NavBar from '../nav/navBar';

const Header = () => {
  //img//
  const imagenCabecera = <img className="container-fluid imgCabecera" src={periodico} alt='Periodico' />
  //jornadas

  return (
    <div>
      {imagenCabecera}
      <NavBar />
    </div>
  )
}

export default Header;
