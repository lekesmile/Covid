import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const CardsInfo = (props) => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <CardContent>
          <Typography>{props.title}</Typography>
          <Typography>{props.flag}</Typography>
          <Typography>
            <strong>{props.cases}</strong>
          </Typography>
          <Typography>{props.total}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardsInfo;
