import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { Box } from "@mui/system";
import Filter from "../../components/Filter";
import SortResults from "../../components/SortResults";
import SearchResults from "../../components/SearchResults";
import Footer from "../../components/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import backend from "../../APIs/backend";
import { SearchContext } from "../../contexts/searchContext";
import { averageRating } from "../../utils/averageRating";

function Search() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("");
  const [reload, setReload] = useState(true);

  useEffect(() => {
    (async () => {
      const postList = (await backend.get("/posts")).data.map((el) => {
        if (el.price) return el;
        return { ...el, price: 1 };
      });
      postList.sort((a, b) => {
        if (sort === "popularity") {
          if (averageRating(b.reviews) === averageRating(a.reviews))
            return b.reviews.length - a.reviews.length;
          return averageRating(b.reviews) - averageRating(a.reviews);
        }
        if (sort === "price asc") {
          return a.price - b.price;
        }
        if (sort === "price desc") {
          return b.price - a.price;
        }
        return 0;
      });
      setPosts(postList);
    })();
  }, [reload, sort]);

  return (
    <SearchContext.Provider value={{ reload, setReload }}>
      <Nav sticky={true} drawer={matches ? <Filter /> : null} />
      <Box
        sx={{
          display: "flex",
          width: "96vw",
          m: "auto",
          mt: "50px",
        }}
      >
        {!matches && <Filter />}
        <div
          style={{ paddingInline: matches ? "20px" : "100px", margin: "auto" }}
        >
          <SortResults
            resultsFound={posts.length}
            sort={sort}
            setSort={setSort}
          />
          <SearchResults data={posts} />
        </div>
      </Box>
      <Footer />
    </SearchContext.Provider>
  );
}

export default Search;
