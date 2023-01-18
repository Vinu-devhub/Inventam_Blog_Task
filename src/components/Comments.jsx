import { Avatar, Box, CircularProgress, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      );
      setComments(response.data);
      setLoading(false);
    };

    fetchComments();
  }, [postId]);

  return (
    <Box my={5}>
      <Typography variant='h4' textAlign='center'>
        Comments
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {loading && <CircularProgress />}
      </Box>
      {comments.map((comment) => (
        <Box
          display='flex'
          gap={2}
          my={4}
          p={2}
          sx={{ boxShadow: 3, bgcolor: grey[200] }}
          key={comment.id}
        >
          <Box>
            <Avatar src='/broken-image.jpg' sx={{ width: 56, height: 56 }} />
          </Box>
          <Box>
            <Typography>{comment.name}</Typography>
            <Typography>{comment.email}</Typography>
            <Box my={2}>
              <Typography pt={2}>{comment.body}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Comments;
