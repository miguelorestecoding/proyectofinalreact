import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart"
      style={{
        display: totalQuantity > 0 ? "flex" : "none",
        justifyContent: "space-between",
        alignItems: "center",
        width: "40px",
      }}
    >
      <FontAwesomeIcon icon={faCartShopping} />
      <span>{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
