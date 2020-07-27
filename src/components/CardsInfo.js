import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const CardsInfo = (props) => {
  return (
    <div className="cardsInfo__mainDiv">
      <Card>
        <CardContent>
          <Typography>{props.title}</Typography>
          <hr style={{ marginBottom: 20 }}></hr>
          <Typography>{props.flag}</Typography>
          <Typography>
            <strong>{props.cases}</strong>
          </Typography>
          <Typography> {props.total}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardsInfo;
