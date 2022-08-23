import { List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const ChatList = ({ chats }) => {
  return (
    <div>
      <List>
        {chats.map((el, i) => (
          <Link to={`/chats/${el.id}`}>
            <ListItem sx={{ bgcolor: "grey", width: "100px" }} key={i}>
              {el.name}
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
