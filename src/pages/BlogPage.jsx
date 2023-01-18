import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const BlogPage = () => {
  return (
    <>
      <Container sx={{ minHeight: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant='h4' sx={{ my: 2, pt: 8 }}>
            Blog Home Page
          </Typography>
          <Box>
            <Typography sx={{ py: 2 }} textAlign='left'>
              voluptatem cumque tenetur consequatur expedita ipsum nemo quia
              explicabo\naut eum minima consequatur\ntempore cumque quae est
              et\net in consequuntur voluptatem voluptates aut
            </Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, ea exercitationem. Adipisci placeat dolor repellat
              possimus rerum, esse, ea quae, voluptate nemo quidem asperiores
              fugit eum eos eaque magnam incidunt. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus, ea exercitationem.
              Adipisci placeat dolor repellat possimus rerum, esse, ea quae,
              voluptate nemo quidem asperiores fugit eum eos eaque magnam
              incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Accusamus, ea exercitationem. Adipisci placeat dolor
              repellat possimus rerum, esse, ea quae, voluptate nemo quidem
              asperiores fugit eum eos eaque magnam incidunt. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Accusamus, ea
              exercitationem. Adipisci placeat dolor repellat possimus rerum,
              esse, ea quae, voluptate nemo quidem asperiores fugit eum eos
              eaque magnam incidunt.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default BlogPage;
