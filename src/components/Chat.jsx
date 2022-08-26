import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import { useEffect } from "react";
import "../styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import { messageAction } from "../store/actions";
import { messages } from "../store/selectors";

export const Chat = () => {
  const dispatch = useDispatch;
  const messageList = useSelector(messages);
  const botMessage = { author: "bot", message: "very nice" };

  const createMessage = (msg) => {
    dispatch(messageAction(msg));
  };

  useEffect(() => {
    let timerBot = setTimeout(() => {
      if (
        messageList.length !== 0 &&
        messageList[messageList.length - 1].author === "me"
      ) {
        dispatch(messageAction(botMessage));
      }
      clearTimeout(timerBot);
    }, 2000);
  }, [messageList]);
  return (
    <div>
      <MessageList list={messageList} />
      <MessageForm onSendMsg={createMessage} />
    </div>
  );
};
