import { Autocomplete, TextField } from "@mui/material";
import React from "react";

function ChipSelect({
  optionsArray,
  label,
  placeholder,
  onChange,
  defaultValueIndex,
}) {
  return (
    <Autocomplete
      multiple
      onChange={onChange}
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
