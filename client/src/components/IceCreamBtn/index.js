import React from "react";
import { Button } from "@material-ui/core";
import PricePiece from "../pricePiece";
import { makeStyles } from "@material-ui/core/styles";

function IceCreamBtn({ orderId, itemId, click, title, price, getHotdogById }) {
  const useStyles = makeStyles({
    btnstyle: {
      minHeight: "100px",
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.btnstyle}
        variant="contained"
        color="primary"
        // onClick={() => getHotdogById(title)}
      >
        {title}{" "}
      </Button>
      {/* <Button onClick={click} variant="outlined">
        {title}
      </Button> */}
      <PricePiece price={price} />
    </div>
  );
}

export default IceCreamBtn;
