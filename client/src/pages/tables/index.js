import React from 'react';

// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from '@material-ui/core';

function Tables () {
  return (
    <div>
      test
      <ButtonGroup
        color='secondary'
        aria-label='outlined secondary button group'
      >
        <Button>Table One</Button>
        <Button>Table Two</Button>
        <Button>Table Three</Button>
        <Button>Table Four</Button>
        <Button>Table Five</Button>
        <Button>Table Six</Button>
      </ButtonGroup>
    </div>

  // <Grid container>
  //   <Grid item xs={2} />
  //   <Grid item xs={8}>
  //     McTesty
  //     <Typography className={classes.root}>
  //       <Link href="/" color="inherit">
  //         Home
  //       </Link>
  //       <Link href="/test" color="inherit">
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

// const openedTable = document.querySelector('#table-open');
// const takenTable = document.querySelector('#table-taken');
// const mode = 'red';

// themeSwitcher.addEventlistner('click', function () {
//   if (mode === 'red') {
//     mode = 'green';
//     container.SetAttribute('class', 'green');
//   } else {
//     mode = 'red';
//     container.SetAttribute('class', 'red');
//   }
// });

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
