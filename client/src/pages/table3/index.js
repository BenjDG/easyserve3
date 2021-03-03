import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import API from '../../services/API';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  orderView: {
    padding: theme.spacing(2, 2),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  buttonView: {
    padding: theme.spacing(2, 2)
    // height: 200,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start'
  },
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}));

function Table3 () {
  const classes = useStyles();
  const [tables, setTable] = useState([]);
  // const [hotdogsList, setHotdogsList] = useState([]);
  // const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    API.findAllOrders()
      .then((res) => {
        // console.log(res.data);
        const currTable = res.data.filter((table3) => table3.restTableId === 3);
        setTable(currTable);
      })
      .catch((err) => {
        console.error(err);
        // const error = new Error(err);
        // setError(error.message + ' - Please login');
      });
  };

  // function handleClick (orderId, itemId, title, price) {
  //   setHotdogsList({ orderId, itemId, title, price });
  // }

  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Box m={2}>
          <Grid item container direction='column'>
            <Grid item>
              <Paper elevation={3} className={classes.orderView}>
                {/* {error}{hotdogsList} */}
                <h1>Table3</h1>
              </Paper>
            </Grid>
            <Grid
              item
              container
              direction='row'
              justify='center'
              alignItems='center'
              className={classes.buttonView}
              spacing={4}
            >
              {tables.map((currTable) => {
                console.log(currTable);
                return (
                  <Grid item xs={3} key={currTable.id}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image='/static/images/cards/contemplative-reptile.jpg'
                          title='Contemplative Reptile'
                        />
                        <CardContent>
                          <Typography gutterBottom variant='h5' component='h2'>
                            User {currTable.userId}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                          >
                            {currTable.notes}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size='small' color='primary'>
                          Share
                        </Button>
                        <Button size='small' color='primary'>
                          {currTable.createdAt}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}

              <Grid item xs={3}>
                <Button href='/' variant='outlined'>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default Table3;
