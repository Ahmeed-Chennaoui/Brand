import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styled from "@emotion/styled";
import backend from "../../../APIs/backend";
import { Icon } from "@iconify/react";

const IdImage = styled("img")(({ theme }) => ({
  width: "33%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const Info = ({ label, value }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Typography variant="subtitle2" color="primary">
        {label + " :"}
      </Typography>
      <Typography> {value}</Typography>
    </div>
  );
};
const columnSx = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  p: 3,
  width: "50%",
};
function VerificationRequest({ data }) {
  const [pending, setPending] = useState(data.pending);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Paper
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        height: { md: "300px" },
        minHeight: "300px",
        backgroundColor: "#FAF1FFAA",
        textAlign: { xs: "center", sm: "center", md: "initial" },
        my: 2,
        p: 1,
      }}
    >
      <IdImage
        src={process.env.REACT_APP_SERVER_IMAGES + data.idPhoto}
        crossOrigin="anonymous"
        style={{ maxWidth: "100%", maxHeight: "100%", cursor: "pointer" }}
        onClick={() =>
          openInNewTab(process.env.REACT_APP_SERVER_IMAGES + data.idPhoto)
        }
      />
      <Box sx={columnSx}>
        {data &&
          React.Children.toArray(
            Object.entries(data).map(([key, value]) => {
              if (["_id", "pending", "idPhoto", "__v"].includes(key)) return;
              if (key === "price")
                return <Info label={key} value={value + " DT"} />;
              return <Info label={key} value={value} />;
            })
          )}
      </Box>
      {pending && (
        <Button
          variant="contained"
          sx={{ height: "5ch" }}
          onClick={async () => {
            const response = await backend.post("/admin/request", {
              email: data.email,
            });
            if (response.data.message) setPending(false);
          }}
        >
          verify user
        </Button>
      )}
      {!pending && (
        <Icon
          icon="iconoir:twitter-verified-badge"
          width={52}
          style={{ marginInline: "50px" }}
          fontStyle={{ color: "green" }}
        />
      )}
    </Paper>
  );
}

export default VerificationRequest;
