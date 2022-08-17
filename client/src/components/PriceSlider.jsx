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
    size="small"
    sx={{ m: 1, width: "12ch"}}
    InputProps={{
      endAdornment: <InputAdornment position="start">DT</InputAdornment>,
    }}
    InputLabelProps={{ shrink: true }}
  />
);

function PriceSlider({handleChange,handleInput,price}) {
  
  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        <CustomSlider
          value={price}
          min={0}
          max={1000}
          valueLabelFormat={(value) =>`${value} DT`}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </div>
      <div style={{ display: "block", justifyContent: "space-between" }}>
        <PriceField label="min" value={price[0]} onChange={handleInput} />
        <PriceField label="max" value={price[1]} onChange={handleInput} />
      </div>
    </>
  );
}

export default PriceSlider;
