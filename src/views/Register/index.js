import React, { useState } from "react";
import { Input, Typography, Button } from "@material-ui/core";

import { emailRegex } from "../../services/config";
import { signup } from "../../services/api/auth";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      window.alert("Invalid email!");
      return;
    }
    if (password.length < 8) {
      window.alert("Password must be more than 8 characters!");
      return;
    }
    if (password != newPassword) {
      window.alert("Password doesn't match!");
      return;
    }

    signup({ email, password }, (response) => {
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
      <Typography>Confirm Password</Typography>
      <Input
        type="password"
        name="new_password"
        value={newPassword}
        required
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.history.push("/login")}
      >
        Login
      </Button>
    </div>
  );
};

export default Register;
