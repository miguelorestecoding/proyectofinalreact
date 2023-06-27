import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        width: "40px",
      }}
    >
      <Link to="/cart">
      <FontAwesomeIcon icon={faCartShopping} />
      </Link>
      <span>{totalQuantity}</span>
    </div>
  );
};

export default CartWidget;
