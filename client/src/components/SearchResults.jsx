import React from "react";
import WorkerCard from "./WorkerCard";
function SearchResults() {
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
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
      <WorkerCard />
    </div>
  );
}

export default SearchResults;
