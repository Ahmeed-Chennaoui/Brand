import React from "react";
import WorkerCard from "./WorkerCard";

function SearchResults({items}) {
  return (
    <div
      className="results-section"
      style={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: "100%",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {(items ? 
      items.map((annonce) => <WorkerCard key={annonce.id} annonce={annonce} />) 
      : console.log("no Data"))}
    </div>
  );
}

export default SearchResults;
