import React from "react";
import { name, city } from "../data/data.js";


const h1 = `${name} is a Web Developer from ${city}`;


function Home() {
  // update the JSX being returned!
  return (
    <div id ="home">
      <h1 style = {{ color: "firebrick" }}> {h1} </h1>
    </div>)
}

export default Home;
