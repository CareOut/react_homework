import React from "react";
import { Link } from "react-router-dom";
import { Button, List, ListItem } from "@mui/material";
import "../styles/header.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { resetStore } from "../store/actions/actions";

export const Header = () => {
  const dispatch = useDispatch();
  const storeReset = () => {
    dispatch(resetStore());
  };

  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="header">
      <List className="header__list">
        <ListItem>
          <Link to="/chats">Chats</Link>
        </ListItem>
        <ListItem>
          <Link to="/profile">Profile</Link>
        </ListItem>
        <ListItem>
          <Link to="/dune">Dune</Link>
        </ListItem>
        <ListItem>
          <Link to="/login">Login</Link>
        </ListItem>
        <ListItem>
          <Link to="/signUp">Registration</Link>
        </ListItem>
        <ListItem>
          <Button className="header__btn" variant="contained" onClick={logOut}>
            LOG OUT
          </Button>
        </ListItem>
        <ListItem>
          <Button
            className="header__btn"
            variant="contained"
            onClick={storeReset}
          >
            Reset Store
          </Button>
        </ListItem>
      </List>
    </div>
  );
};
