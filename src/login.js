//import axios from "axios";
import React, {useState } from "react";
import { withRouter } from "react-router-dom";

const Login = (props) => {

  const [password, setPassword] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    if (password === "Elantris") {
      console.log("logeado");
      props.history.push("/general");
      
    } else {
      alert("No te conozco, no puedes pasar");
    }
    
  };

  const logo = (
    <img
      className="img-fluid imgCabecera  float-right"
      src={process.env.PUBLIC_URL + `/images/logo.png`}
      alt="Logo"
      width="50em"
      height="auto"
    />
  );

  return (
    
    <div className="container justify-content-center mt-4">
      <div className="row">
        <div className="col"></div> 
        <div className="col-6">
          <div className="row login">
          <div className="col-5">
            <h3 className="titular mb-4">¿Quién eres?</h3>
          </div>
          <div className="col"></div>
          <div className="col-5">
            {logo}
            </div>
          </div>
        </div>
      <div className="col"></div>
      </div>

      <div className="row">
        <div className="col"></div>
        <div className="col-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="InputEmail">Escribe tu contraseña</label>
            <input
              type="password"
              className="form-control"
              id="InputEmail"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            className="btn bg-f0e3c7  border border-dark text-dark"
          >
            Enviar
          </button>
          </form>
          </div>
        <div className="col"></div>
        </div>
      </div>
      
  );
}

export default withRouter(Login);
