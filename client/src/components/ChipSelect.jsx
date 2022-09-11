import { Autocomplete, TextField } from "@mui/material";
import React from "react";

function ChipSelect({
  optionsArray,
  label,
  placeholder,
  setValue,
  defaultValueIndex,
  value,
}) {
  const handleChange = (event, value) => {
    setValue(value);
  };
  return (
    <Autocomplete
      multiple
      onChange={handleChange}
      value={value}
      options={optionsArray}
      getOptionLabel={(optionsArray) => optionsArray}
      defaultValue={defaultValueIndex ? [optionsArray[defaultValueIndex]] : []}
      filterSelectedOptions
      sx={{ mt: 5 }}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
}

export default ChipSelect;
