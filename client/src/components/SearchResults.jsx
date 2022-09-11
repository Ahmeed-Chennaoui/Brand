import React from "react";
import WorkerCard from "./WorkerCard";
function SearchResults({ data }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: "100%",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {React.Children.toArray(
        data.map((element) => {
          return <WorkerCard worker={element} />;
        })
      )}
    </div>
  );
}

export default SearchResults;
