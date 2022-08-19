import { List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const ChatList = ({ chats, chatId }) => {
  return (
    <div>
      <List>
        {chats.map((i, id) => (
          <Link to={`/chats/${id}`}>
            <ListItem sx={{ bgcolor: "grey", width: "100px" }} key={i}>
              {chats[id].name}
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
