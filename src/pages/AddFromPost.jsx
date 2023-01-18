import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState } from 'react';
import FormSuccession from '../components/FormSuccession';

export default function AddPostForm() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: data.get('title'),
          content: data.get('content'),
        },
      );
      if (response.status === 201) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Container
      component='main'
      sx={{
        minHeight: '100vh',
      }}
    >
      {success ? (
        <Box>
          <FormSuccession />
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography variant='h2'>Blog Post</Typography>
            <TextField
              margin='normal'
              required
              fullWidth
              id='title'
              label='Blog Title'
              name='title'
            />

            <TextField
              margin='normal'
              required
              fullWidth
              name='content'
              label='Blog Content'
              id='content'
              multiline
              rows={10}
            />
            <Button
              type='submit'
              variant='contained'
              sx={{ mt: 3, mb: 2, textAlign: 'center' }}
            >
              Post Blog
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
}
