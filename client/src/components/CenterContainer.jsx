import { Container } from "@mui/system";
import React from "react";

function CenterContainer({ children, sx }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
    >
      {children}
    </Container>
  );
}

export default CenterContainer;
