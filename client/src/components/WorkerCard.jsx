import React from "react";
import { Avatar, Button, Divider, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";

const CardContainer = styled(Paper)(({ theme }) => ({
  width: "30%",
  padding: "10px",
  borderRadius: "10px",
  marginBottom: "20px",
}));

function WorkerCard() {
  return (
    <CardContainer elevation={2}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar sx={{ width: 48, height: 48, mr: 1 }} />
        <div>
          <Typography variant="body1">Karim Hmidi</Typography>
          <Typography variant="caption">Software Developer</Typography>
        </div>
      </Box>
      <Typography variant="h5">
        Will make responsive websites using React.js and Node.js
      </Typography>
      <div style={{ color: "#faaf00", display: "flex", alignItems: "center" }}>
        <StarIcon />
        4.9
        <Typography sx={{ m: 1, color: "rgba(0,0,0,0.7)" }}>
          (134 Reviews)
        </Typography>
      </div>
      <Divider sx={{ borderColor: "#6439ff" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="caption" sx={{ mr: 1 }}>
            STARTING AT
          </Typography>
          <Typography color="#2e7d32" fontWeight="bold">
            50 Dt
          </Typography>
        </div>

        <Button variant="outlined" color="primary">
          Get in Touch
        </Button>
      </div>
    </CardContainer>
  );
}

export default WorkerCard;
