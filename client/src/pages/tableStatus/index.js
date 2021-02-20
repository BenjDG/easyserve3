import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function TableStatus() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Typography className={classes.root}>
          <Link href="/" color="inherit">
            Home
          </Link>
          <ul>
            <li>
              <Link href="/MainMenu" color="inherit">
                Table 1
              </Link>
            </li>
            <li>
              <Link href="/MainMenu" color="inherit">
                Table 2
              </Link>
            </li>
            <li>
              <Link href="/MainMenu" color="inherit">
                Table 3
              </Link>
            </li>
            <li>
              <Link href="/MainMenu" color="inherit">
                Table 4
              </Link>
            </li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default TableStatus;
