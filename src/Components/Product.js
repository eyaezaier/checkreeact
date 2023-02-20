import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

function Product (props)  {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      {props.children}

    
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
       {props.country}
      </Card.Text>
      <Button onClick={()=>alert(`the mark is ${props.mark}`)} variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </div>
  )
}
 Card.propTypes={
  mark:propTypes.string,
  name:propTypes.string,
};

Product.defaultProps ={
  country : 'Tunisia'
}
export default Product;