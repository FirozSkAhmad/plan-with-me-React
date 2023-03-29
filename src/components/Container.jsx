import React, { useState } from "react";
import "./Container.css";
import data from "../data";
import Card from "./Card";

const Container = () => {
  const [details, setDetails] = useState(data);
  function handleNotIntrested(id) {
    const newData = details.filter((x) => x.id != id);
    setDetails(newData);
  }
  function handelRefresh() {
    setDetails(data);
  }
  return (
    <div className="container">
      <h1>Plane With Me</h1>
      <div className="subContainer">
        {details.length > 0 ? (
          details.map((singleCD) => {
            return (
              <Card key={details.id} data={singleCD} fn={handleNotIntrested} />
            );
          })
        ) : (
          <button id="refresh-btn"onClick={handelRefresh}>Refresh</button>
        )}
      </div>
    </div>
  );
};

export default Container;
