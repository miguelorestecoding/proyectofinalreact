import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({id, title, images = [], price, stock}) => {

  const [quantityAdded, setQuantityAdded] = useState(0)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <p>Id: ${id}</p>
        <Card.Title>{title}</Card.Title>
        <p>Precio: ${price}</p>
        <p>Stock: {stock}</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <footer>{
        quantityAdded > 0 ? ( <Link to="/cart">Terminar Compra</Link>
         ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
         )
        }
        
      </footer>
    </Card>
  )
}

export default ItemDetail
