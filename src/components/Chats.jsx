import React from "react";

import "../styles/style.css";
import { ChatList } from "./ChatList";
import { Chat } from "./Chat";

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
