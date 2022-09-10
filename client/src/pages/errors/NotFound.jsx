import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import CenterContainer from "../../components/CenterContainer";
import err404 from "../../assets/404.svg";

function NotFound() {
  const navigate = useNavigate();

  return (
    <CenterContainer sx={{ height: "100vh" }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
        PAGE NOT FOUND
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "65%",
          backgroundImage: `url(${err404})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "50%",
          mb: 2,
        }}
      ></Box>
      <Button
        variant="outlined"
        size="large"
        onClick={() => navigate("/")}
        sx={{ mb: 5 }}
      >
        Go to landing page
      </Button>
    </CenterContainer>
  );
}

export default NotFound;
