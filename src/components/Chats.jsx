import React from "react";
import { useState, useEffect, useParams } from "react";
import "../styles/style.css";
import { ChatList } from "./ChatList";
import { Chat } from "./Chat";

const chatList = {
  id1: {
    name: "Chat1",
  },
  id2: {
    name: "Chat2",
  },
};

export const Chats = () => {
  const botMessage = { author: "bot", message: "very nice" };
  const [messageList, setMessageList] = useState([]);
  const { chatId } = useParams();
  const [chats, setChats] = useState(chatList);

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
    <div className="App">
      <ChatList chats={chats} chatId={chatId} />
      <div className="formMessage">
        <Chat list={messageList} onSendMsg={createMessage} />
      </div>
    </div>
  );
};
