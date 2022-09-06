import { Button, List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chatsAction } from "../store/actions/actions";
import { useSelector } from "react-redux";
import { chatList } from "../store/selectors";

export const ChatList = () => {
  const chats = useSelector(chatList);

  const dispatch = useDispatch();
  const handleAddChat = () => {
    dispatch(chatsAction("Chat"));
  };

  return (
    <div>
      <Button variant="contained" onClick={handleAddChat}>
        add chat
      </Button>
      <List>
        {chats.chatList.map((el) => (
          <Link to={`/chats/${el.id}`} key={el.id}>
            <ListItem sx={{ bgcolor: "grey", width: "100px" }}>
              {el.name}
              {el.id}
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};
