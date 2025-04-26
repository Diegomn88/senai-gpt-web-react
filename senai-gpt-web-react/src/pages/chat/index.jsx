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

    const [chats, setChats] = useState([])
    const [chatSelecionado, setChatSelecionado] = useState(null);

    const [userMessage, setUserMessage] = useState("");

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
            setChats(json);
        }

        else {
            if (response.status == 401) {

                alert("Token invalido. Faça login novamente.");
                window.location.href = "/login";

            }
        }
    }

    const clickChat = (chat) => {
        setChatSelecionado(chat);
    }

    const chatGPT = async (message) => {

        // Configurações do endpoint e chave da API
        const endpoint = "https://ai-testenpl826117277026.openai.azure.com/";
        const apiKey = "";
        const deploymentId = "gpt-4"; // Nome do deployment no Azure OpenAI
        const apiVersion = "2024-05-01-preview"; // Verifique a versão na documentação

        // URL para a chamada da API
        const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;

        // Configurações do corpo da requisição
        const data = {
            messages: [{ role: "user", content: message }],
            max_tokens: 50
        };

        // Cabeçalhos da requisição
        const headers = {
            "Content-Type": "application/json",
            "api-key": apiKey
        };

        // Faz a requisição com fetch
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            const botMessage = result.choices[0].message.content;
            return botMessage;
        }

    }
    const enviarMessage = async (message) => {

        let resposta = await chatGPT(message);

        console.log("Resposta: ", resposta);

    }


    let novaMensagemUsuario = {
        userId: "userId",
        text: message,
        id: 10
    };

    let novaRespostaChatGpt = {
        userId: "chatbot",
        text: resposta,
        id: 10

    };

    let novoChatSelecionado = { ...chatSelecionado};
    novoChatSelecionado.messages.push(novaMensagemUsuario);
    novoChatSelecionado.messages.push(novaRespostaChatGpt);

    setChatSelecionado(novoChatSelecionado);

    return (

        <>

            <div className="tela-principal">

                <header className="caixa-esquerda">

                    <div className="superior">

                        <button className="btn-chat" type="button"> + New chat</button>


                        {chats.map(chat => (
                            <button className="botoes" type="button" onClick={() => clickChat(chat)}>
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

                    {chatSelecionado == null && (
                        <>
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

                        </>
                    )}

                    {chatSelecionado != null && (

                        <>

                            <div className="chat-container">

                                <div className="chat-header">

                                    <h2>{chatSelecionado.chatTitle} </h2>

                                </div>

                                <div className="chat-messages">

                                    {chatSelecionado.messages.map(message => (

                                        <p className={"message-item " + (message.userId == "chatbot" ? "chatbot" : "")}> {message.text}</p>
                                    ))}


                                </div>

                            </div>

                        </>

                    )}

                    <div className="caixa-mensagem">

                        <img src={logo10} alt="" srcset="" />
                        <img src={logo11} alt="" srcset="" />


                        <input
                            className="inptchat"
                            value={userMessage}
                            onChange={event => setUserMessage(event.target.value)}
                            type="type-message"
                            placeholder="type message"
                        />

                        <img onClick={() => enviarMessage(userMessage)} src={logo12} alt="Send." />


                    </div>

                </main>

            </div>


        </>

    )

}

export default Chat

