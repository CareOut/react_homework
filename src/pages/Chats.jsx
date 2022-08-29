import React from "react";

import "../styles/style.css";
import { ChatList } from "../components/ChatList";
import { Chat } from "../components/Chat";
import { useParams } from "react-router-dom";

export const Chats = ({ chats }) => {
  const { chatId } = useParams();
  return (
    <div className="App">
      <ChatList chats={chats} chatId={chatId} />
      <div className="formMessage">
        <Chat />
      </div>
    </div>
  );
};
