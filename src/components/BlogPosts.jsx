import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Link,
  Paper,
} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { grey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

export default function MultiActionAreaCard({ postsData }) {
  // const posts = useSelector((state) => state.post);

  return (
    <>
      <div>
        {postsData.map((post) => {
          return (
            <Box display='flex' justifyContent='center' key={post.id}>
              <Paper
                elevation={4}
                sx={{
                  width: '75%',
                  my: 4,
                  p: 2,
                }}
              >
                <Link
                  to={{
                    pathname: `/posts/${post.id}`,
                    query: post,
                  }}
                  component={RouterLink}
                  underline='none'
                >
                  <CardActionArea sx={{ bgcolor: grey[50] }}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        textAlign='left'
                        textTransform='capitalize'
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='text.secondary'
                        textAlign='left'
                      >
                        {post.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size='small' color='primary' variant='contained'>
                      Read More
                    </Button>
                  </CardActions>
                </Link>
              </Paper>
            </Box>
          );
        })}
      </div>
    </>
  );
}
