import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import "./Counter.css";

const Counter = ({ auctions }) => {
  return (
    <div>
      <Card className="center-content" body outline color="success">
        <CardTitle tag="h5">No. of Auctions Captured</CardTitle>
        <CardText className="bold-text">{auctions}</CardText>
      </Card>
    </div>
  );
};

export default Counter;
