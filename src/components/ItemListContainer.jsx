import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "white",
        color: "red",
      }}
    >
      {greeting}
    </div>
  );
};

export default ItemListContainer;
