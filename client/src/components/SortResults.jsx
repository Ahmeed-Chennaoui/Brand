import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

function SortResults({ resultsFound, sort, setSort }) {
  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        // paddingInline: "10%",
        alignItems: "center",
        m: 0,
        marginBottom: "30px",
      }}
    >
      <Typography>We found {resultsFound} results</Typography>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="sortResults">Sort by</InputLabel>
        <Select
          labelId="sortResults"
          defaultValue=""
          value={sort}
          onChange={handleChange}
          label="sort by"
          sx={{ width: "160px" }}
        >
          <MenuItem value="price asc">Price Ascending</MenuItem>
          <MenuItem value="price desc">Price Descending</MenuItem>
          <MenuItem value="popularity">Popularity</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SortResults;
