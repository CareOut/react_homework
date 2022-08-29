import React from "react";

import "../styles/style.css";
import { ChatList } from "../components/ChatList";
import { Chat } from "../components/Chat";

export const Chats = ({ chats }) => {
  return (
    <div className="App">
      <ChatList chats={chats} />
      <div className="formMessage">
        <Chat />
      </div>
    </div>
  );
};
