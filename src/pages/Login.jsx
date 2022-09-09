import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import "../styles/SignUp.css";
import { Button, Input } from "@mui/material";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    setError("");
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="form_registration">
      <Header />

      <form className="form__form" onSubmit={handleSubmit}>
        <p>Fill in the form below to login to your account.</p>
        <div>
          <Input
            className="input__input"
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <Input
            className="input__input"
            placeholder="Password"
            name="password"
            onChange={handlePassChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error && <p>{error}</p>}
          <Button variant="contained" color="success" type="submit">
            Login
          </Button>
        </div>

        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};
