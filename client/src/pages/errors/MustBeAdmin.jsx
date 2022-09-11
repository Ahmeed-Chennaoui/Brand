import React from "react";
import { Typography, Box, Button } from "@mui/material";
import adminErr from "../../assets/adminErr.svg";
import CenterContainer from "../../components/CenterContainer";
import { useNavigate } from "react-router-dom";
function MustBeAdmin() {
  const navigate = useNavigate();
  return (
    <CenterContainer sx={{ height: "100vh" }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }} color="info">
        You must be an admin to access this page
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "65%",
          backgroundImage: `url(${adminErr})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "50%",
          mb: 4,
        }}
      ></Box>
      <Button onClick={() => navigate("/")} variant="outlined" sx={{ mb: 5 }}>
        Go to landing page
      </Button>
    </CenterContainer>
  );
}

export default MustBeAdmin;
