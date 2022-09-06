import { HomePage } from "./pages/HomePage";
import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Chats } from "./pages/Chats";
import { Profile } from "./pages/Profile";
import { Chat } from "./components/Chat";
import { Dune } from "./pages/Dune";

import PrivateRoute from "./hocs/PrivateRoute";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

function App() {
  const auth = getAuth();
  const [authed, setAuthed] = useState(false);
  useEffect(() => {
    const currentUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chats" element={<Chats />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute auth={authed}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/chats/:chatId"
          element={
            <PrivateRoute auth={authed}>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route path="/dune" element={<Dune />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
