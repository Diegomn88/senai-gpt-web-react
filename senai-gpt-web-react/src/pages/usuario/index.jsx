import "./usuario.css";
import logo from "../../assets/imgs/Chat.png";
import { useEffect, useState } from "react";
import Login from "../login";

function Usuario() {


    const [name, setName] = useState([]);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirma, setConfirma] = useState(null);


    const novoUsuario = async () => {


        if (name == "") {
            alert("Inserir o nome do usuario.");
            return
        }

        if (email == "") {
            alert("Inserir email valido.");
            return
        }

        if (password == "") {
            alert("Insira a senha.");
            return
        }

        if (confirma == "") {
            alert("Insira a senha.");
            return
        }

        if (password != confirma) {

            alert("Senha incorreta.");
            return
        }

        let novoCadastro = {
            name: name,
            email: email,
            Password: password
        };
        debugger;

        let response = await fetch("https://senai-gpt-api.up.railway.app/users", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                novoCadastro
            )

        });

        if (response.ok == true) {

            alert("Cadastro realizado com sucesso.");
            return
            window.location.href = "/login";

        }
    }

    return (

        <>
            <header> </header>

            <main className="page-container">

                <div className="robo-image"> </div>

                <div className="login-conteiner">

                    <img className="logo" src={logo} alt="SenaiGPT." />

                    <h1 >Novo Usuario

                    </h1>

                    <input className="inpt" onChange={event => setName(event.target.value)} type="text" placeholder="Insira o nome do usuario" />
                    <input className="inpt" onChange={event => setEmail(event.target.value)} type="email" placeholder="Insira o e-mail" />

                    <input className="inpt" onChange={event => setPassword(event.target.value)} type="password" placeholder="Insira a senha" />
                    <input className="inpt" onChange={event => setConfirma(event.target.value)} type="password" placeholder="Insira a senha" />

                    <button className="btn-primary" onClick={novoUsuario} type="Entrar">Cadastrar </button>

                    <a href="/login"> Clique aqui para fazer o login </a>


                </div>

            </main>

        </>

    )
}
export default Usuario;