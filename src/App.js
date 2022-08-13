import { useState, useEffect } from "react";
import MessageForm from "./components/MessageForm";
import Button from "./components/Button";
import "./styles/style.css";
import MessageList from "./components/MessageList";

function App() {
  const botMessage = { author: "bot", message: "very nice" };
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({ author: "", message: "" });

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
      <MessageList list={messageList} />
      <MessageForm
        value={message.message}
        onChange={(e) => setMessage({ author: "me", message: e.target.value })}
        type="text"
        placeholder="наберите сообщение"
      />
      <Button className="btn" onClick={createMessage}>
        Создать сообщение
      </Button>
    </div>
  );
}

export default App;
