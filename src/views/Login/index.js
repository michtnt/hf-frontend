import React, { useState } from "react";
import { Input, Typography, Button } from "@material-ui/core";

import { login } from "../../services/api/auth";
import { emailRegex } from "../../services/config";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      window.alert("Invalid email!");
      return;
    }

    login({ email, password }, (response) => {
      localStorage.setItem("hf-frontend@token", response.token);
      props.history.push("/recipe");
    });
  };

  return (
    <div>
      <Typography>Email</Typography>
      <Input
        type="text"
        name="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Typography>Password</Typography>
      <Input
        type="password"
        name="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.history.push("/register")}
      >
        Register
      </Button>
    </div>
  );
};

export default Login;
