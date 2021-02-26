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

function McTestFace () {
  const [data, setdata] = useState();
  const classes = useStyles();

  useEffect(() => {
    loadData();
  }, [data]);

  const loadData = () => {
    API.getHotdogs()
      .then(res => {
        JSON.stringify(res.data);
        setdata(JSON.stringify(res.data));
      })
      .catch(err => console.log(err));
  };

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        McTesty
        <Typography className={classes.root}>
          <Link href='/' color='inherit'>
            Home
          </Link>
          <Link href='/test' color='inherit'>
            McTesty
          </Link>
        </Typography>
        <p>
          {data}
        </p>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default McTestFace;
