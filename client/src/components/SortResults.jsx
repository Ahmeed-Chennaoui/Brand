import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

function SortResults({total,handleChange,order}) {

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
      <Typography>There are {total} results</Typography>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="sortResults">Sort by</InputLabel>
        <Select
          labelId="sortResults"
          id="demo-simple-select-standard"
          value={order}
          onChange={handleChange}
          label="sort by"
          sx={{ width: "200px" }}
        >
          <MenuItem value={"Price Ascending"}>Price Ascending</MenuItem>
          <MenuItem value={"Price Descending"}>Price Descending</MenuItem>
          <MenuItem value={"Popularity"}>Popularity</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SortResults;
