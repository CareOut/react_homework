import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import { messages } from "../store/selectors";

export default function MessageList({ chatId }) {
  const list = useSelector(messages);
  console.log(list);
  return (
    <div className="messageList">
      {list[chatId].map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </div>
  );
}
