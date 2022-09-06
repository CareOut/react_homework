import React from "react";
import "../styles/style.css";
import { ChatList } from "../components/ChatList";
import { Header } from "../components/Header";

export const Chats = () => {
  return (
    <>
      <Header />
      <div className="App">
        <ChatList />
      </div>
    </>
  );
};
