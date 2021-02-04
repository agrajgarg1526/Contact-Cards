import React from "react";
import Image from "./Image";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <Detail info={props.id} />
        <h2 className="heading name">{props.name}</h2>
        <Image image={props.image} />
      </div>
      <div className="bottom">
        <Detail info={props.phone} />
        <Detail info={props.email} />
      </div>
    </div>
  );
}

export default Card;
