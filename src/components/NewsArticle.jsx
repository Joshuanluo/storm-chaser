import React from "react";
import Card from "react-bootstrap/Card";

const NewsArticle = ({ url, title }) => {
  return (
    <Card style={{ maxWidth: "40rem", width: "95%" }} className="article">
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default NewsArticle;
