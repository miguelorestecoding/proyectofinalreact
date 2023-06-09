import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({id, title, images, price, stock}) => {
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
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <footer>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada ')}/>
      </footer>
    </Card>
  )
}

export default ItemDetail
