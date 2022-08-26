import { ButtonBase, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  let navigate = useNavigate();
  return (
    <div
      style={{
        fontSize: "50px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography>Not on</Typography>
      <Typography sx={{ color: "#6439ff", mx: "5px", fontWeight: "bold" }}>
        Brand
      </Typography>
      <Typography>?</Typography>
      <ButtonBase sx={{ ml: 1 }} onClick={() => navigate("/signup")}>
        <Typography style={{ textDecoration: "underline" }}>
          Create an account
        </Typography>
      </ButtonBase>
    </div>
  );
}

export default CreateAccount;
