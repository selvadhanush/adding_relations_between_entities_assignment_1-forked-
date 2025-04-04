import React from "react";

function Child({ destination }) {
  const { name, location, image, description, price } = destination;

  return (
    <div >
      <img src={image} alt={name}  />
      <div>
        <h2 >{name}</h2>
        <p >{location}</p>
        <p >{description}</p>
        <div >{price}</div>
      </div>
    </div>
  );
}

export default Child;
