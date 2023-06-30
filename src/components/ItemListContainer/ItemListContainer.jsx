import React from "react";
import { useState, useEffect } from "react";
// import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams  } from "react-router-dom";  

import {collection, getDocs, getFirestore } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {
 const db = getFirestore();
 const productCollection = collection(db, "proyecto-final-react");

 getDocs(productCollection).then((snapshot) => {
  setProducts(
    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } ))
 );
  });

      // const asyncFunc = categoryId ? getProductsByCategory : getProducts

      // asyncFunc(categoryId)
      // .then(response => {
      //   setProducts(response)
      // })
      // .catch(error => {
      //   console.log(error)
      // })

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
