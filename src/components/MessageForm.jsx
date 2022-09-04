import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageAction } from "../store/actions/actions";
import { messages } from "../store/selectors";

export default function MessageForm({ chatId }) {
  const [message, setMessage] = useState({ author: "", message: "" });
  const dispatch = useDispatch();
  const messageList = useSelector(messages);
  const botMessage = { author: "bot", message: "very nice" };
  console.log(messageList);
  const createMessage = () => {
    dispatch(addMessageWithThunk(message, chatId));
  };

  const addMessageWithThunk = () => (dispatch) => {
    dispatch(messageAction(message, chatId));
    console.log(Object.keys(messageList));
    let timerBot = setTimeout(() => {
      if (
        Object.keys(messageList).length !== 0 &&
        Object.keys(messageList)[Object.keys(messageList).length - 1].author !==
          "bot"
      ) {
        dispatch(messageAction(botMessage, chatId));
      }
      clearTimeout(timerBot);
      setMessage({ author: "", message: "" });
    }, 2000);
  };

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
