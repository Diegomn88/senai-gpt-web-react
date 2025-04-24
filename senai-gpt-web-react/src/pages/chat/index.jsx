import "./chat.css";

import logo0 from "../../assets/imgs/ChatText.svg";
import logo1 from "../../assets/imgs/IconSet.svg";
import logo2 from "../../assets/imgs/IconSet (1).svg";
import logo3 from "../../assets/imgs/User.svg";
import logo4 from "../../assets/imgs/IconSet (2).svg";
import logo5 from "../../assets/imgs/IconSet (3).svg";
import logo6 from "../../assets/imgs/Chat.png";
import logo7 from "../../assets/imgs/Chats.svg";
import logo8 from "../../assets/imgs/IconSet (4).svg";
import logo9 from "../../assets/imgs/IconSet (5).svg";
import logo10 from "../../assets/imgs/Button.svg";
import logo11 from "../../assets/imgs/Button (1).svg";
import logo12 from "../../assets/imgs/PaperPlaneRight.svg";
import { useEffect, useState } from "react";




function Chat() {

    const [chats, setChats] = useState ([])

    useEffect(() => {

        getChats();

    }, []);


    const getChats = async () => {

        let response = await fetch("https://senai-gpt-api.azurewebsites.net/chats", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            }
        });

        console.log(response);

        if (response.ok == true) {
            let json = await response.json();
            setChats (json);
        }

        else {
            if (response.status == 401) {

                alert("Token invalido. Faça login novamente.");
                window.location.href = "/login";
            
            }

        }


    }

return (

    <>

        <div className="tela-principal">

            <header className="caixa-esquerda">

                <div className="superior">

                    <button className="btn-chat" type="button"> + New chat</button>


                     {chats.map(chat => ( 
                    <button className="botoes" type="button">
                        <img src={logo0} alt="" srcset="" />
                        {chat.chatTitle}
                        </button>
                     ))}



                </div>

                <div className="inferior">

                    <button className="botoes" type="button">
                        <img src={logo1} alt="" srcset="" />
                        Clear conversation </button>

                    <button className="botoes" type="button">
                        <img src={logo2} alt="" srcset="" />
                        Light mode </button>


                    <button className="botoes" type="button">
                        <img src={logo3} alt="" srcset="" />
                        My account </button>


                    <button className="botoes" type="button">
                        <img src={logo4} alt="" srcset="" />
                        Updates & FAQ </button>

                </div>

            </header>

            <div className="linha"></div>

            <main className="caixa-direita">
                <img className="logo-principal" src={logo6} alt="" />


                <div className="tabelas">

                    <div className="titulo-1">


                        <img src={logo7} alt="" srcset="" />

                        <h1>Exemples</h1>

                        <button className="botao" type="button"> Explique como um computador quântico funciona. </button>
                        <button className="botao" type="button"> Explique como um computador quântico funciona. </button>
                        <button className="botao" type="button"> Explique como um computador quântico funciona. </button>

                    </div>

                    <div className="titulo-1">

                        <img src={logo8} alt="" srcset="" />


                        <h1>Exemples</h1>

                        <button className="botao" type="button"> Explique como um computador quântico funciona. </button>
                        <button className="botao" type="button"> Explique como um computador quântico funciona. </button>
                        <button className="botao" type="button"> Explique como um computador quântico funciona. </button>

                    </div>

                    <div className="titulo-1">


                        <img src={logo9} alt="" srcset="" />
                        <h1>Exemples</h1>

                        <button className="botao" type="button"> Explique como um computador quântico funciona. </button>
                        <button className="botao" type="button"> Explique como um computador quântico funciona. </button>
                        <button className="botao" type="button"> Explique como um computador quântico funciona. </button>

                    </div>

                </div>



                <div className="caixa-mensagem">

                    <img src={logo10} alt="" srcset="" />
                    <img src={logo11} alt="" srcset="" />


                    <input className="inptchat" type="type-message" placeholder="type message" />

                    <img src={logo12} alt="" srcset="" />

                </div>

            </main>

        </div>


    </>

)

}

export default Chat

