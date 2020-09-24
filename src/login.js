import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  const [password, setPassword] = useState("");
  const [acceso, setAcceso] = useState(false);

  const handleSubmit = async evt => {
    evt.preventDefault();

    const fetchData = async () => {
      try {
        const result = await axios.get(`/usuario/${password}`);
        console.log(result.status);
        console.log(result.data.usuario[0].admin);
        setAcceso(true);
        
      } catch (error) {
        console.log(error.response.status);
        alert("No te conozco, no puedes pasar");
      }
    }
    fetchData();
  };

  return (
    <div className="container justify-content-center mt-4">
      <h3 className="titular mb-4">¿Quien eres?</h3>
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
  );
}

export default Login;
