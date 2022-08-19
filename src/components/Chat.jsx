import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

export const Chat = ({ list, onSendMsg }) => {
  return (
    <div>
      <MessageList list={list} />
      <MessageForm onSendMsg={onSendMsg} />
    </div>
  );
};
