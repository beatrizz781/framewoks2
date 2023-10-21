import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const rodapeStyle = {
  backgroundColor: 'green',
  color: 'white',
  padding: '14px',
  marginTop: '1rem',
  width: '100%'
};

const Rodape = () => (
  <footer>
    <Box p={1} style={rodapeStyle}>
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              IFMS Dourados-Trabalho de Frameworks2-Prof. Ricardo
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6" align="center">
              InfoPress - Amanda, Beatriz, Jucielly
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </footer>
);

export default Rodape;
