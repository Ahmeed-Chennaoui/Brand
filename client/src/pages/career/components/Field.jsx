import React from "react";
import {
  Box,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Field({
  message,
  optionsList,
  multiline,
  phone,
  value,
  onChange,
  name,
  price,
}) {
  return (
    <Box
      sx={{
        my: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
        {message}
      </Typography>
      {optionsList && (
        <FormControl fullWidth>
          <Select
            value={value}
            onChange={onChange}
            name={name}
            placeholder={`choose a ${name}`}
          >
            {optionsList &&
              React.Children.toArray(
                optionsList.map((item) => (
                  <MenuItem value={item}> {item}</MenuItem>
                ))
              )}
          </Select>
        </FormControl>
      )}
      {multiline && (
        <TextField
          value={value}
          name={name}
          onChange={onChange}
          style={{ width: "300px" }}
          multiline
          rows={4}
          variant="outlined"
          label="Service description"
        />
      )}
      {phone && (
        <Input
          value={value}
          name={name}
          onChange={onChange}
          startAdornment={<Typography sx={{ mr: 1 }}>+216</Typography>}
          type="number"
          sx={{ my: 2 }}
          inputProps={{ maxLength: 8 }}
        />
      )}
      {price && (
        <TextField
          value={value}
          name={name}
          onChange={onChange}
          variant="outlined"
          InputProps={{
            endAdornment: <InputAdornment position="start">DT</InputAdornment>,
          }}
          type="number"
          sx={{ my: 2, width: "150px" }}
        />
      )}
    </Box>
  );
}

export default Field;
