import React from "react";
import "./Card.css";

function Card(props) {
  const classStyle = "card " + props.className;
  return <div className={classStyle}>{props.children}</div>;
}

export default Card;
