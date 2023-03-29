import React, { useState } from "react";
import "./Card.css";

const Card = ({ data, fn }) => {
  const less = data.info.split(" ").slice(0, 25).join(" ");
  const [info, setInfo] = useState(less);
  const [toggle, setToggle] = useState(true);

  function handelreadmore() {
    setInfo(data.info);
    setToggle(!toggle);
  }
  function handelreadless() {
    setInfo(less);
    setToggle(!toggle);
  }

  return (
    <div className="card">
      <div id="imgcontainer">
        <img src={data.image} />
      </div>
      <p id="price">{`₹ ${data.price}`}</p>
      <p id="name"> {data.name}</p>
      {toggle ? (
        <p className="info">
          {info}
          <span id="readmore" onClick={handelreadmore}>
            ...Read more
          </span>
        </p>
      ) : (
        <p className="info">
          {info}
          <span id="readless" onClick={handelreadless}>
            Read less
          </span>
        </p>
      )}
      <button onClick={() => fn(data.id)}>Not intrested</button>
    </div>
  );
};

export default Card;
