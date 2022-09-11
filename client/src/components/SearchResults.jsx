import React, { useContext, useEffect } from "react";
import { SearchContext } from "../contexts/searchContext";
import WorkerCard from "./WorkerCard";
import { states } from "../data/filterData";
function SearchResults({ data }) {
  const { navigationOption, setFilter, loading } = useContext(SearchContext);
  const handleNavigation = () => {
    const filter = {
      rating: -1,
      priceRange: [0, process.env.REACT_APP_MAX_PRICE],
      professions: [navigationOption],
      cities: states,
      noRating: true,
    };
    setFilter(filter);
  };
  useEffect(() => {
    if (navigationOption) {
      handleNavigation();
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",

        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {React.Children.toArray(
        !loading &&
          data.map((element) => {
            return <WorkerCard worker={element} />;
          })
      )}
    </div>
  );
}

export default SearchResults;
