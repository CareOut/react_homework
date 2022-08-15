import { useState, useEffect } from "react";
import MessageForm from "./components/MessageForm";

import "./styles/style.css";
import MessageList from "./components/MessageList";

import Button from "@mui/material/Button";
import { ChatList } from "./components/ChatList";

function App() {
  const botMessage = { author: "bot", message: "very nice" };
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({ author: "", message: "" });
  const chatList = [
    { name: "chat_1", id: "dfg" },
    { name: "chat_2", id: "dag" },
    { name: "chat_3", id: "dhg" },
  ];

  const createMessage = () => {
    setMessageList([...messageList, message]);
    setMessage({ author: "", message: "" });
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
      <ChatList chat={chatList} />
      <div className="formMessage">
        <MessageList list={messageList} />

        <MessageForm
          value={message.message}
          onChange={(e) =>
            setMessage({ author: "me", message: e.target.value })
          }
          type="text"
          placeholder="наберите сообщение"
        />
        <Button
          variant="contained"
          color="success"
          type="search"
          onClick={createMessage}
          style={{ margin: "15px 0px" }}
        >
          Создать сообщение
        </Button>
      </div>
    </div>
  );
}

export default App;
