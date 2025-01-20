import React from "react";
import "../styles/MenuEntry.css";

const MenuEntry = ({ title, description, price, image }) => {
  return (
    <div className="menu-entry">
      <img src={image} alt={title} className="menu-image" />
      <div className="menu-info">
        <h3 className="menu-title">{title}</h3>
        <p className="menu-description">{description}</p>
        <p className="menu-price">${price}</p>
      </div>
    </div>
  );
};

export default MenuEntry;
