import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageAction } from "../store/actions/actions";
import { messages } from "../store/selectors";

export default function MessageForm() {
  const [message, setMessage] = useState({ author: "", message: "" });
  const dispatch = useDispatch();
  const messageList = useSelector(messages);
  const botMessage = { author: "bot", message: "very nice" };

  const createMessage = () => {
    dispatch(addMessageWithThunk(message));
  };

  const addMessageWithThunk = () => (dispatch, getState) => {
    dispatch(messageAction(message));

    if (
      messageList.length !== 0 &&
      messageList[messageList.length - 1].author === "me"
    ) {
      setTimeout(() => dispatch(messageAction(botMessage)), 2000);
    }
    setMessage({ author: "", message: "" });
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
