import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function MessageForm({ onSendMsg }) {
  const [message, setMessage] = useState({ author: "", message: "" });

  const handleSendMessage = (msg) => () => {
    onSendMsg(msg);
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
        onClick={handleSendMessage(message)}
        style={{ margin: "15px 0px" }}
      >
        Создать сообщение
      </Button>
    </>
  );
}
