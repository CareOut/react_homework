import React from "react";

import "../styles/style.css";
import { ChatList } from "../components/ChatList";
import { Chat } from "../components/Chat";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

export const Chats = () => {
  const { chatId } = useParams();
  return (
    <>
      <Header />
      <div className="App">
        <ChatList />
        <div className="formMessage">
          <Chat chatId={chatId} />
        </div>
      </div>
    </>
  );
};
