import React from "react";

function MyCard(imagen, name, description) {
  return (
    <div className="card">
      <img src={imagen} alt={name} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default MyCard;
