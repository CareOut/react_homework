import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import { messages } from "../store/selectors";

export default function MessageList({ chatId }) {
  const list = useSelector(messages);

  return (
    <div className="messageList">
      {Object.keys(list).map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </div>
  );
}
