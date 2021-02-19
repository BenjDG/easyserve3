import { Grid } from '@material-ui/core';
import React from 'react';

function McTestFace () {
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={8}>
        McTesty
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}

export default McTestFace;
