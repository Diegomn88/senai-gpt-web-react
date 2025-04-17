import "./login.css";
import logo from "../../assets/imgs/Chat.png";
import { useState } from "react";


function login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {

    // console.log ("Funcionou");
    // console.log (email);
    // console.log (password);

    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {

      headers: {
        "Content-Type": "application/json"
      },

      method: "POST",  // METODO QUE ENVIA DADOS.
      body: JSON.stringify({
        email: email,
        password: password
      })

    });

    console.log(response);

  }

  return (
    <>

      <header> </header>

      <main className="page-container">

        <div className="robo-image">
        </div>


        <div className="login-conteiner">

          <img className="logo" src={logo} alt="SenaiGPT." />

          <h1 >Login

          </h1>

          <input className="inpt" onChange={event => setEmail(event.target.value)} type="email" placeholder="Insira o Email" />
          <input className="inpt" onChange={event => setPassword(event.target.value)} type="password" placeholder="Insira o Senha" />

          <button className="btn-primary" onClick={onLoginClick} type="Entrar">Entrar

          </button>

        </div>

      </main>

      <footer> </footer>


    </>
  )
}

export default login