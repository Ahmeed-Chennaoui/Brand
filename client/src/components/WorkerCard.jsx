import React, { useState } from "react";
import { Avatar, Button, Divider, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import WorkerAvatar from "./WorkerAvatar";
import UserModal from "./UserModal";
import { averageRating } from "../utils/averageRating";

const CardContainer = styled(Paper)(({ theme }) => ({
  padding: "10px",
  borderRadius: "10px",
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  [theme.breakpoints.up("md")]: {
    width: "49%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "30%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

function WorkerCard({ worker }) {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <CardContainer elevation={2}>
      <WorkerAvatar worker={worker} />
      <Typography variant="h5">{worker.description}</Typography>
      {worker.reviews.length !== 0 && (
        <div
          style={{ color: "#faaf00", display: "flex", alignItems: "center" }}
        >
          <StarIcon />
          {averageRating(worker.reviews)}
          <Typography sx={{ m: 1, color: "rgba(0,0,0,0.7)" }}>
            {worker.reviews.length !== 1
              ? `(${worker.reviews.length} Reviews) `
              : "(1 review)"}
          </Typography>
        </div>
      )}
      {worker.reviews.length === 0 && (
        <Typography sx={{ m: 1, color: "rgba(0,0,0,0.7)" }}>
          (No reviews yet)
        </Typography>
      )}
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
            {worker.price || 0} Dt
          </Typography>
        </div>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpenDetails(true)}
        >
          Get in Touch
        </Button>
      </div>
      {openDetails && (
        <UserModal
          worker={worker}
          open={openDetails}
          setOpen={setOpenDetails}
        />
      )}
    </CardContainer>
  );
}

export default WorkerCard;
