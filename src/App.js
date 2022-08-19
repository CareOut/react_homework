import { HomePage } from "./components/HomePage";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Chats } from "./components/Chats";
import { Profile } from "./components/Profile";
import { Chat } from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chats" element={<Chats />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/chats/:chatId" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
