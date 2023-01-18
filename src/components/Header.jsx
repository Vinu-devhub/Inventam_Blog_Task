import { AppBar, Box, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box>
      <AppBar position='static' sx={{ p: 1, pl: 5 }}>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          News
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Header;
