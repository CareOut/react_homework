import { List, ListItem } from "@mui/material";
import React from "react";

export const ChatList = ({ chat }) => {
  return (
    <div>
      <List>
        {chat.map((el, index) => (
          <ListItem sx={{ bgcolor: "grey", width: "100px" }} key={index}>
            {el.name}
          </ListItem>
        ))}
      </List>
    </div>
  );
};
