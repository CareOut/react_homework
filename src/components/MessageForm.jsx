import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageAction } from "../store/actions";
import { messages } from "../store/selectors";
import { useEffect } from "react";

export default function MessageForm() {
  const [message, setMessage] = useState({ author: "", message: "" });
  const dispatch = useDispatch();
  const messageList = useSelector(messages);
  const botMessage = { author: "bot", message: "very nice" };

  const createMessage = () => {
    dispatch(messageAction(message));
    setMessage({ author: "", message: "" });
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
  }, [messageList, dispatch]);

  return (
    <>
      <TextField
        className="input"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        autoFocus={true}
        value={message.message}
        onChange={(e) => setMessage({ author: "me", message: e.target.value })}
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
    </>
  );
}
