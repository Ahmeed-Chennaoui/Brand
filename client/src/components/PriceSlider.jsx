import React from "react";
import { useState } from "react";
import { InputAdornment, Slider, TextField } from "@mui/material";
import styled from "@emotion/styled";

const CustomSlider = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
  },
}));
const PriceField = ({ label, value, onChange }) => (
  <TextField
    label={label}
    name={label}
    type="number"
    value={value}
    onChange={onChange}
    sx={{ m: 1, width: "15ch" }}
    InputProps={{
      endAdornment: <InputAdornment position="start">DT</InputAdornment>,
    }}
    InputLabelProps={{ shrink: true }}
  />
);

function PriceSlider({ initial_values }) {
  const [value, setValue] = useState([0, 200]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInput = (event) => {
    if (event.target.name === "min")
      return setValue([Number(event.target.value), value[1]]);
    setValue([value[0], Number(event.target.value)]);
  };
  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        <CustomSlider
          value={value}
          max={initial_values ? initial_values[1] : 1000}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PriceField label="min" value={value[0]} onChange={handleInput} />
        <PriceField label="max" value={value[1]} onChange={handleInput} />
      </div>
    </>
  );
}

export default PriceSlider;
