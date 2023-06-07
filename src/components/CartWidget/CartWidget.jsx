import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "40px",
      }}
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <span>7</span>
    </div>
  );
};

export default CartWidget;
