import { Button, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
function UploadPhoto({ onChange, imageName, label, sx }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button color="secondary" variant="outlined" component="label" sx={sx}>
        {label}
        <Icon
          icon="ic:baseline-photo-camera"
          style={{ marginLeft: "8px" }}
          height={24}
          width={24}
        />
        <input hidden accept="image/*" type="file" onChange={onChange} />
      </Button>
      {imageName && (
        <Typography sx={{ ml: 3, textAlign: "center" }}>{imageName}</Typography>
      )}
    </div>
  );
}

export default UploadPhoto;
