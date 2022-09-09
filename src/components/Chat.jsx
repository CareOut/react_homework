import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import "../styles/style.css";
import { ChatList } from "./ChatList";
import { useParams } from "react-router-dom";
import { Header } from "./Header";

export const Chat = () => {
  const { chatId } = useParams();
  console.log(chatId);
  return (
    <div>
      <Header />
      <div className="App">
        <ChatList />
        <div className="formMessage">
          <h1>chat{chatId}</h1>
          <MessageList chatId={chatId} />
          <MessageForm chatId={chatId} />
        </div>
      </div>
    </div>
  );
};
