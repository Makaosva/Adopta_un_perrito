import React from "react";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Tags({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <Badge size="lg" pill bg={tag.color} className="me-3 fs-6 boton">
          {tag.text}
        </Badge>
      ))}
    </div>
  );
}

export default Tags;
