import React from "react";
import { useState, useEffect } from "react";
import { getProductById, getProducts } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, "proyecto-final-react");
    getDocs(productCollection)
    .then((snapshot) => {
      const productFilter = snapshot.docs.map((doc) =>({
        idF: doc.idF,
        ...doc.data(),
      }))
      setProduct(
        productFilter.filter((products) => products.category === categoryId));
    });

    // getProductById(itemId)
    // .then((response) => {
    //     setProduct(response)
    // })
    // .catch(error => {
    //     console.error(error)
    // })
  }, [categoryId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
