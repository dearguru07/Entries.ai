import React, { useState } from "react";
import "./styles.css";

const Result = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <h3>{data}</h3>
      <button
        className="btn"
        onClick={() => {
          setData("Hello world..");
        }}
      >
        {data ? "hiden" : "show"}
      </button>
    </div>
  );
};
export default Result;
