//import axios from "axios";
import React, {useState } from "react";
import {
  useHistory,
  Redirect,
  withRouter,
  browserHistory,
  hashHistory
} from "react-router-dom";
import ReactDOM from "react-dom";
//import { browserHistory } from "react-router";

const Login = (props) => {
  let history = useHistory();

  const [password, setPassword] = useState("");
 
  /* const handleSubmit = async evt => {
    evt.preventDefault();

    const fetchData = async () => {
      try {
        const result = await axios.get(`/usuario/${password}`);
        console.log(result.status);
        console.log(result.data.usuario[0].admin);
        //localStorage.setItem('usuario', result.data.usuario[0]);
        
      } catch (error) {
        console.log(error.response.status);
        alert("No te conozco, no puedes pasar");
        setAcceso(false);
      }
    };
    fetchData();
    console.log(`El acceso es ${acceso}`)
  }; */

  const handleSubmit = evt => {
    evt.preventDefault();
    if (password === "aa") {
      console.log("logeado");
      //this.props.history.push("/app");
      //hashHistory.push("/app");
      //browserHistory.push("/app");
      
       // ReactDOM.render(<Redirect to="/app" />)
      
    } else {
      alert("No te conozco, no puedes pasar");
    }
    
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
