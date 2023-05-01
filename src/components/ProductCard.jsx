import React from "react";
import { Button, Card } from "react-bootstrap";

function ProductCard(props) {
  let product = props.product;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
