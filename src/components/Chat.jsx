import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import "../styles/style.css";

export const Chat = () => {
  return (
    <div>
      <MessageList />
      <MessageForm />
    </div>
  );
};
