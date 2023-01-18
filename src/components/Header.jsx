import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Header
          </Typography>
          <Link to='/new' style={{ color: 'inherit', textDecoration: 'none' }}>
            <Button color='inherit' variant='outlined'>
              Create new Blog
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
