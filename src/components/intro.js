import React from 'react';

const Intro = (props) => {
  console.log(props.location);
  console.log(props.location.search);
  if (props.location.serach==="?pipo") {
    window.location.forceReload(true);
    console.log('Recargando');
  }
  return (
    <div className="container-fluid text-center">
      <h2>
          Campañas Mentiras Eternas - Diario
      </h2>
    </div>
  )
};

export default Intro;
