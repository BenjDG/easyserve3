import React from 'react';

// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Box, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(4),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));

function Tables () {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Box className={classes.root}>
            <ButtonGroup
              color='secondary'
              aria-label='outlined secondary button group'
              orientation='vertical'
              size='large'
              alignItems='center'
            >
              <Button>Table One</Button>
              <Button>Table Two</Button>
              <Button>Table Three</Button>
            </ButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={4} />
      </Grid>

      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Box className={classes.root}>
            <ButtonGroup
              color='secondary'
              aria-label='outlined secondary button group'
              orientation='vertical'
              size='large'
              alignItems='center'
            >
              <Button>Table Four</Button>
              <Button>Table Five</Button>
              <Button>Table Six</Button>
            </ButtonGroup>
          </Box>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </div>

  // <Grid container>
  //   <Grid item xs={2} />
  //   <Grid item xs={8}>
  //     McTesty
  //     <Typography className={classes.root}>
  //       <Link href='/' color='inherit'>
  //         Home
  //       </Link>
  //       <Link href='/test' color='inherit'>
  //         McTesty
  //       </Link>
  //     </Typography>
  //     <p>{data}</p>
  //   </Grid>
  //   <Grid item xs={2} />
  // </Grid>
  );
}

export default Tables;

// export default function CenteredGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
