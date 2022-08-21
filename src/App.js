import { HomePage } from "./components/HomePage";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Chats } from "./components/Chats";
import { Profile } from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chats" element={<Chats />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/chats/:1" element={<Chats />}></Route>
        <Route exact path="/chats/:2" element={<Chats />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
