import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ p: 5, bgcolor: grey[300], textAlign: 'center' }}>
      <Typography>Footer</Typography>
    </Box>
  );
};

export default Footer;
