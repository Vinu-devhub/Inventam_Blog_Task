import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Comments from '../components/Comments';

const BlogPage = () => {
  const location = useLocation();
  const [showComments, setShowComments] = useState(false);

  const { id, title, body } = location.state;

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
            {title}
          </Typography>
          <Box>
            <Typography sx={{ py: 2 }} textAlign='left'>
              {body}
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

        <Paper elevation={3} sx={{ mt: 5, py: 2, textAlign: 'center' }}>
          <Button
            onClick={() => {
              setShowComments(!showComments);
            }}
            variant='contained'
          >
            Show Comments
          </Button>
        </Paper>

        {showComments && <Comments postId={id} />}
      </Container>
    </>
  );
};

export default BlogPage;
