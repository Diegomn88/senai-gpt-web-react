import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import Chat from "./pages/chat";
import Usuario from "./pages/usuario"


function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>

          < Route path="/" element={<Login />} ></Route >
          < Route path="/Login" element={<Login />} ></Route >
          < Route path="/chat" element={<Chat />} ></Route >
          < Route path="/new-user" element={<Usuario />} ></Route > 
          < Route path="*" element={<h1>Not Found </h1>}  ></Route >

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
