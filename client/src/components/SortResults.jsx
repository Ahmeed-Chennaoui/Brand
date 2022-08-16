import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

function SortResults() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        // paddingInline: "10%",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <Typography>There are 327 results</Typography>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="sortResults">Sort by</InputLabel>
        <Select
          labelId="sortResults"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="sort by"
          sx={{ width: "200px" }}
        >
          <MenuItem value={10}>Price Ascending</MenuItem>
          <MenuItem value={20}>Price Descending</MenuItem>
          <MenuItem value={30}>Popularity</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SortResults;
