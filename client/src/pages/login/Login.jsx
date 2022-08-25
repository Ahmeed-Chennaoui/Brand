import React, { useState, useContext } from "react";
import CreateAccount from "./components/CreateAccount";
import WelcomeText from "../../components/WelcomeText";
import Password from "../../components/Password";
import GoogleSignin from "./components/GoogleSignin";
import { GlobalContext } from "../../contexts/globalContext";
import { isEmpty } from "../../utils/isEmpty";
import backend from "../../APIs/backend";
import {
  Alert,
  Button,
  ButtonBase,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import CenterContainer from "../../components/CenterContainer";

function Login() {
  const { currentUser, setCurrentUser } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event, setter) => {
    if (setter === "email") setEmail(event.target.value);
    else setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const loginData = {
        email: email,
        password: password,
      };
      const response = await backend.post("/auth/login", loginData);
      if (response.data.error) {
        setError(response.data.error);
      } else {
        const response = await backend.get(`/user/${email}`);
        setCurrentUser(response.data);
      }
    } catch {
      setError("Problem connecting to server . Try again later");
    }
  };

  return (
    <CenterContainer sx={{ height: "100vh" }}>
      <WelcomeText />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          sx={fieldSX}
          label="email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        <Password
          sx={fieldSX}
          value={password}
          onChange={(e) => handleChange(e, "password")}
        />

        <ButtonBase style={{ width: "25ch" }}>
          <Typography style={forgotPasswordStyle}>Forgot password ?</Typography>
        </ButtonBase>

        {error && (
          <Alert severity="error" sx={{ my: "10px" }}>
            {error}
          </Alert>
        )}
      </div>

      <Button
        disabled={!(password && email)}
        sx={fieldSX}
        variant="contained"
        onClick={handleSubmit}
      >
        Log In
      </Button>
      <Typography>- OR -</Typography>

      <GoogleSignin />

      <div style={{ ...fieldSX, textAlign: "center", marginTop: "20px" }}>
        <Typography style={{ color: "rgb(120,120,120)" }}>
          By continuing, you agree to Brand's Terms of service and Privacy
          policy
        </Typography>

        <Divider sx={{ m: 3 }} />

        <CreateAccount />
      </div>

      {!isEmpty(currentUser) && <Navigate to="/" replace={true} />}
    </CenterContainer>
  );
}

export default Login;

const fieldSX = { m: 1, width: "50ch" };
const forgotPasswordStyle = {
  paddingInline: "10px",
  paddingBlock: "5px",
};
