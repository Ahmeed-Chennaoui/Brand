import React, { useState } from "react";
import { Rating } from "@mui/material";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
const labels = {
  1: "Horrible",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
function RatingMin() {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        value={value}
        precision={1}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />

      <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
    </Box>
  );
}

export default RatingMin;
