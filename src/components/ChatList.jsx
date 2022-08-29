import { Button, List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { chatsAction } from "../store/actions/actions";

export const ChatList = ({ chats, chatId }) => {
  const dispatch = useDispatch();
  const handleAddChat = () => {
    dispatch(chatsAction("newChat"));
  };

  return (
    <div>
      <Button variant="contained" onClick={handleAddChat}>
        add chat
      </Button>
      <List>
        {chats.map((el, i) => (
          <Link to={`/chats/${el.id}`} key={el.id}>
            <ListItem sx={{ bgcolor: "grey", width: "100px" }}>
              {el.name}
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
