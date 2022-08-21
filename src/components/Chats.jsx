import React from "react";

import "../styles/style.css";
import { ChatList } from "./ChatList";
import { Chat } from "./Chat";

const chatList = [
  {
    name: "Chat1",
    id: "1",
  },
  {
    name: "Chat2",
    id: "2",
  },
];

export const Chats = () => {
  return (
    <div className="App">
      <ChatList chats={chatList} />
      <div className="formMessage">
        <Chat chats={chatList} />
      </div>
    </div>
  );
};
