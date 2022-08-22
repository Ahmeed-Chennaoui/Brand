import React, { useEffect, useRef } from "react";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/globalContext";
import { isEmpty } from "../../utils/isEmpty";
import backend from "../../APIs/backend";
import styled from "@emotion/styled";
import {
  Button,
  ButtonBase,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import Password from "../../components/Password";
import { Navigate } from "react-router-dom";
import { Box } from "@mui/system";
function Login() {
  const googleButtonRef = useRef();
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  const onGoogleSignIn = async (user) => {
    let userCred = user.credential;
    let payload = jwt_decode(userCred);
    console.log(payload);
    const data = {
      email: payload.email,
      givenName: payload.given_name,
      familyName: payload.family_name,
      userName: payload.name,
      photo: payload.picture,
    };
    await backend.post("/user", data);
    setCurrentUser(data);
  };
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "91825127591-2sft5p6qggg3780heuug6oet2m6aa1er.apps.googleusercontent.com",
      callback: onGoogleSignIn,
      login_uri: "http://localhost:3000",
      auto_select: false,
    });
    window.google.accounts.id.renderButton(googleButtonRef.current, {
      size: "large",
    });
  }, []);
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextContainer>
        <Typography style={{ ...titleStyle }}>Welcome to </Typography>
        <Typography
          style={{ ...titleStyle, color: "#6439ff", marginLeft: "10px" }}
        >
          Brand
        </Typography>
      </TextContainer>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField sx={fieldSX} label="email" />
        <Password sx={fieldSX} />
        <ButtonBase style={{ width: "25ch" }}>
          <Typography style={forgotPasswordStyle}>Forgot password ?</Typography>
        </ButtonBase>
      </div>

      <Button sx={fieldSX} variant="contained">
        Log In
      </Button>
      <Typography
        style={{
          color: "#404040",
          fontWeight: "bold",
          fontSize: "1.35em",
          marginBottom: "10px",
        }}
      >
        - OR -
      </Typography>

      <div ref={googleButtonRef}></div>

      <div style={{ ...fieldSX, textAlign: "center", marginTop: "20px" }}>
        <Typography style={{ color: "rgb(120,120,120)" }}>
          By continuing, you agree to Brand's Terms of service and Privacy
          policy
        </Typography>
        <Divider sx={{ m: 3 }} />
        <TextContainer style={{ fontSize: "50px" }}>
          <Typography>Not on</Typography>
          <Typography sx={{ color: "#6439ff", mx: "5px", fontWeight: "bold" }}>
            Brand
          </Typography>
          <Typography>?</Typography>
          <ButtonBase sx={{ ml: 1 }}>
            <Typography style={{ textDecoration: "underline" }}>
              Create an account
            </Typography>
          </ButtonBase>
          <Typography></Typography>
        </TextContainer>
      </div>

      {!isEmpty(currentUser) && <Navigate to="/" replace={true} />}
    </Container>
  );
}

export default Login;
const fieldSX = { m: 1, width: "50ch" };
const forgotPasswordStyle = {
  paddingInline: "10px",
  paddingBlock: "5px",
};
const titleStyle = {
  color: "#404040",
  fontWeight: "bold",
  fontSize: "2em",
  marginBottom: "50px",
};
const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
}));
