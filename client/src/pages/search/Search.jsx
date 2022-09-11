import React, { useEffect, useLayoutEffect, useState } from "react";
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
import { isEmpty } from "../../utils/isEmpty";
import { jobs, states } from "../../data/filterData";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";

function Search() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState({});
  const [reload, setReload] = useState(true);
  const [maxPrice, setMaxPrice] = useState(10);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      let postList = (await backend.get("/posts")).data.map((el) => {
        if (el.price) return el;
        return { ...el, price: 1 };
      });
      setMaxPrice(Math.max(...postList.map((el) => el.price)));
      if (searchParams.get("profession")) {
        postList = [];
      }
      if (!isEmpty(filter)) {
        postList = (
          await backend.post("/postsQuery", {
            price: {
              $gt: filter.priceRange[0] - 1,
              $lt: filter.priceRange[1] + 1,
            },
            profession: filter.professions.length ? filter.professions : jobs,
            city: filter.cities.length ? filter.cities : states,
          })
        ).data;
        postList = postList.filter((post) => {
          if (averageRating(post.reviews) == 0 && filter.noRating) return true;
          return averageRating(post.reviews) > filter.rating - 0.1;
        });
      }

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
      setTimeout(() => setLoading(false), 300);
    })();
  }, [reload, sort, filter]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        reload,
        setReload,
        maxPrice,
        navigationOption: searchParams.get("profession"),
        setFilter,
        loading,
        setLoading,
      }}
    >
      <Nav
        sticky={true}
        drawer={
          matches ? <Filter filter={filter} setFilter={setFilter} /> : null
        }
      />
      <Loading loading={loading} />
      <Box
        sx={{
          display: "flex",
          width: "96vw",
          mx: "auto",
          mt: "50px",
        }}
      >
        {!matches && <Filter filter={filter} setFilter={setFilter} />}

        <div
          style={{
            paddingInline: matches ? "20px" : "100px",
            marginInline: "auto",
            width: "100%",
          }}
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
