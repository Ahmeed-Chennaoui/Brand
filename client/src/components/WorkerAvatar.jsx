import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { isLink } from "../utils/isLink";

function WorkerAvatar({ worker }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Avatar
        sx={{ width: 48, height: 48, mr: 1 }}
        src={
          worker.picture && isLink(worker.picture)
            ? worker.picture
            : process.env.REACT_APP_SERVER_IMAGES + worker.picture
        }
        alt={worker.userName}
        imgProps={{ crossOrigin: "anonymous" }}
      />
      <div>
        <Typography variant="body1">{worker.userName}</Typography>
        {worker.profession && (
          <Typography variant="caption">
            {worker.profession} in {worker.city}
          </Typography>
        )}
      </div>
    </Box>
  );
}

export default WorkerAvatar;
