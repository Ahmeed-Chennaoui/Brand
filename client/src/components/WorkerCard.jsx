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
  [theme.breakpoints.down("md")]: {
    width: "95vmax",
    maxWidht:"95vmax", 
    borderBottom: "1px solid #e6e6e6",
    display: "block",
  },
}));

function WorkerCard({annonce}) {
  return (
    <CardContainer elevation={2}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar sx={{ width: 48, height: 48, mr: 1 }} />
        <div>
          <Typography variant="body1">Anon</Typography>
          <Typography variant="caption">{annonce.titre}</Typography>
        </div>
      </Box>
      <Typography variant="h5">
        {annonce.description}
      </Typography>
      <div style={{ color: "#faaf00", display: "flex", alignItems: "center" }}>
        <StarIcon />
        {(annonce.rating-Math.floor(annonce.rating) >=.5 ? Math.floor(annonce.rating)+.5 : Math.floor(annonce.rating))}
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
            {annonce.price}
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
