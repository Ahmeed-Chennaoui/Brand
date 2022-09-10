import React from "react";
import { Typography, Box, ButtonGroup, Button } from "@mui/material";
import unauthorized from "../../assets/unauthorized.svg";
import CenterContainer from "../../components/CenterContainer";
import { useNavigate } from "react-router-dom";
function Unauthorized() {
  const navigate = useNavigate();
  return (
    <CenterContainer sx={{ height: "100vh" }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
        You must be logged in to access this page
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "65%",
          backgroundImage: `url(${unauthorized})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "50%",
          mb: 4,
        }}
      ></Box>
      <ButtonGroup size="large" sx={{ mb: 5 }}>
        <Button onClick={() => navigate(-1)}>Go back</Button>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      </ButtonGroup>
    </CenterContainer>
  );
}

export default Unauthorized;
