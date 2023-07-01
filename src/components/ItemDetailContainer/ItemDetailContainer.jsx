import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
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

            // getProductById(itemId)
            // .then((response) => {
            //     setProduct(response)
            // })
            // .catch(error => {
            //     console.error(error)
            // })

        }, [itemId])

  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
