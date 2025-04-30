import "./account.css";


function MyAccount() {


    return (

        <>

            <main className="page-container">

                <div className="robo-image">
                </div>

                <div className="login-conteiner">

                    <img className="logo" src="../assets/imgs/Chat.png " alt="SenaiGPT." />

                    <h1 style="font-size: 76px;">Login

                    </h1>

                    <input className="inpt" type="email" placeholder="Insira o Email" />
                    <input className="inpt" type="password" placeholder="Insira o Senha" />

                    <button className="btn-primary" type="Entrar">Entrar</button>

                </div>

            </main>

        </>

    )
}


