import { Box, CircularProgress, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BlogPosts from '../components/BlogPosts';
import {
  default as PaginationRounded,
} from '../components/Pagination';

const HomePage = () => {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPostsData(data);
        setLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container sx={{ minHeight: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant='h2' sx={{ textAlign: 'center', my: 2 }}>
            Blog Home Page
          </Typography>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          ) : (
            <BlogPosts postsData={currentPosts} loading={loading} />
          )}
          <PaginationRounded
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={postsData.length}
            paginate={paginate}
          />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
