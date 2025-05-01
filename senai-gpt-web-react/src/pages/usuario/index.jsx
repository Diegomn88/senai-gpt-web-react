import "./usuario.css";
import logo from "../../assets/imgs/Chat.png";



function NewUser() {


    const [name, setName] = useState([]);
    const [emailSelecionado, setEmailSelecionado] = useState(null);
    const [PasswordSelecionado, PasswordSelecionado] = useState(null);

    useEffect(() => {

        getChats();

    }, []);


    const novoUsuario = async (novoCadastro) => {

    let novoCadastro= {
        name: nome,
        email: email,
        Password: senha,
   };

    let response = await fetch("https://senai-gpt-api.up.railway.app/users" , {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("meuToken"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            novoCadastro
        )
    });



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

                    <button className="btn-primary" onClick={onLoginClick} type="Entrar">Entrar </button>

                    <a href="/new-user"> Clique aqui para criar um usuario</a>


                </div>

            </main>

        </>

    )
}

export default NewUser