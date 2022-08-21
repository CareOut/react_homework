import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import { useState, useEffect } from "react";
import "../styles/style.css";

export const Chat = ({ chats }) => {
  const botMessage = { author: "bot", message: "very nice" };
  const [messageList, setMessageList] = useState([]);

  const createMessage = (msg) => {
    setMessageList([...messageList, msg]);
  };

  useEffect(() => {
    let timerBot = setTimeout(() => {
      if (
        messageList.length !== 0 &&
        messageList[messageList.length - 1].author === "me"
      ) {
        setMessageList([...messageList, botMessage]);
      }
      clearTimeout(timerBot);
    }, 2000);
  }, [messageList]);
  return (
    <div>
      <h1>{chats.name}</h1>
      <MessageList list={messageList} />
      <MessageForm onSendMsg={createMessage} />
    </div>
  );
};
