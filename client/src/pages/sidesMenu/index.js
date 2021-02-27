import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

function Sides () {
  const classes = useStyles();
  const [data, setdata] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    API.getSides()
      .then((res) => {
        console.log(res.data);

        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography className={classes.root}>
            Sides
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

export default Sides;
