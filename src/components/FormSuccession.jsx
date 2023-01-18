import { Alert, Container, Typography } from '@mui/material';
import React from 'react';

const FormSuccession = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant='h2' sx={{ my: 4 }}>
        Thank you
      </Typography>
      <Alert variant='filled' severity='success'>
        Post Submitted Successfully!
      </Alert>
    </Container>
  );
};

export default FormSuccession;
