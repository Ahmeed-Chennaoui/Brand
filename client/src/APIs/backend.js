import axios from "axios";
import React from "react";


export default axios.create({
  baseURL: "https://localhost:5000",
  //   headers: {
  //     Authorization:
  //   },
});
