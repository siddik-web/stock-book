import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { products } from "../productStore";

function Store() {
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {products.map((product, index) => (
          <Col align="center" key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
