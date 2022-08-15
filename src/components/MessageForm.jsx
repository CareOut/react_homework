import React from "react";
import TextField from "@mui/material/TextField";

export default function MessageForm(props) {
  return (
    <TextField
      className="input"
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      autoFocus={true}
      {...props}
    />
  );
}
