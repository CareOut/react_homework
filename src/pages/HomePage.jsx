import { List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <List>
        <ListItem>
          <Link to="/chats">Chats</Link>
        </ListItem>
        <ListItem>
          <Link to="/profile">Profile</Link>
        </ListItem>
        <ListItem>
          <Link to="/dune">Dune</Link>
        </ListItem>
      </List>
    </div>
  );
};
