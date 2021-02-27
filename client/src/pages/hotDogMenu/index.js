import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import API from '../../services/API';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

function HotDog () {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    API.getHotdogs()
      .then((res) => {
        console.log(res.data);

        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography className={classes.root}>
            <h1>HotDogs</h1>
          </Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Grid item container>
        <ul>
          {data.map((item, idx) => {
            return <li key={idx}>{item.title}</li>;
          })}
        </ul>
      </Grid>
    </Grid>
  );
}

export default HotDog;
