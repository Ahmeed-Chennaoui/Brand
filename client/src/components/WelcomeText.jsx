import { Typography } from "@mui/material";
import React from "react";

function WelcomeText() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Typography style={{ ...titleStyle }}>Welcome to </Typography>
      <Typography
        style={{ ...titleStyle, color: "#6439ff", marginLeft: "10px" }}
      >
        Brand
      </Typography>
    </div>
  );
}

export default WelcomeText;
const titleStyle = {
  color: "#404040",
  fontWeight: "bold",
  fontSize: "2em",
  marginBottom: "50px",
};
