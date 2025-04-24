import "./login.css";
import logo from "../../assets/imgs/Chat.png";
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {


    //  const email = "admin@example.com";
    //  if (validarEmail(email)) {
    //    console.log("Email válido!");
    //  } else {
    //    console.log("Email inválido!");
    //  }



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

    if (response.ok == true) {

      alert("login realizado com sucesso");

      console.log(response);
      let json = await response.json();

      let token = json.accessToken;

      console.log("token: " + token);

      //localstorage serve para salvar o token.
      localStorage.setItem("meuToken", token);


      // function setCookie(name,vale,days){
      //   const date = new Date ();
      //   date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // dias em ms
      //   const expires = "expires=" + date.toUTCString();
      //   document.cookie = `${name} = ${value}; ${expires}; path=/`;
      // } 
      // setCookie ("meuToken",token = 7)

      window.location.href = "/chat";


    } else {

      if (response.status == 401) {
        alert("credenciais incorretas");

      } else {

        alert("Erro inesperado aconteceu");

      }
    }

  }

  return (
    <>
      <header> </header>

      <main className="page-container">

        <div className="robo-image"> </div>

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

// function validarEmail(email) {
//   const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return padrao.test(email);

// }

export default Login