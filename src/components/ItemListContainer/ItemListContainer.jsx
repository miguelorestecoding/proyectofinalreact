import React from "react";
import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams  } from "react-router-dom";  

import {collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()

   useEffect(() => {
  const db = getFirestore();
      const ref = !categoryId
        ? collection(db, "proyecto-final-react")
        : query(
            collection(db, "proyecto-final-react"),
            where("category", "==", categoryId)
          );
 getDocs(ref).then((snapshot) => {
  setProducts(
    snapshot.docs.map((doc) => ({ idF: doc.id, ...doc.data() } ))
 );
  });
    }, [categoryId]);

console.log(products)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        color: "red",
      }}
    >
      <h3>{greeting}</h3>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
