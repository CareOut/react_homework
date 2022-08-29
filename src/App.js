import { HomePage } from "./components/HomePage";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Chats } from "./components/Chats";
import { Profile } from "./components/Profile";
import { useSelector } from "react-redux";
import { chat } from "./store/selectors";
import { Dune } from "./components/Dune";

function App() {
  const chats = useSelector(chat);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/chats" element={<Chats chats={chats} />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/chats/:1" element={<Chats chats={chats} />}></Route>
        <Route exact path="/chats/:2" element={<Chats chats={chats} />}></Route>
        <Route exact path="/dune" element={<Dune />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
