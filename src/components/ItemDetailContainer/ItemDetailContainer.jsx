import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {

      const db = getFirestore();
 const productCollection = doc(db, "proyecto-final-react", itemId);
 getDoc(productCollection).then((snapshot) => {
  setProduct({ id: snapshot.id, ...snapshot.data() }); 
  });
        }, [itemId])

  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
