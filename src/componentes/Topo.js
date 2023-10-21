import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function appBarLabel(label) {
  return (
    <Toolbar>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

export default function MenuAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'green' , color: "white", margin:'100px'}}>
        <Toolbar>
          <img
            src="../logo.png" 
            alt="Logo"
            style={{ height: '200px', marginRight: '60px' }}
          />
          {appBarLabel('INFOPRESS')}
        </Toolbar>
      </AppBar>
    </Stack>
  );
}
