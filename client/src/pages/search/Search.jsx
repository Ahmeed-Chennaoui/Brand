import React from "react";
import Nav from "../../components/Nav";
import { Box } from "@mui/system";
import Filter from "../../components/Filter";
import SortResults from "../../components/SortResults";
import SearchResults from "../../components/SearchResults";
import Footer from "../../components/Footer";
function Search() {
  return (
    <div>
      <Nav sticky={true} />
      <Box
        sx={{
          display: "flex",
          width: "96vw",
          m: "auto",
          mt: "50px",
        }}
      >
        <Filter />
        <div style={{ paddingInline: "100px", margin: "auto" }}>
          <SortResults />
          <SearchResults />
        </div>
      </Box>
      <Footer />
    </div>
  );
}

export default Search;
