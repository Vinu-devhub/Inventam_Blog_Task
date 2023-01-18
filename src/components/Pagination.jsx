import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export default function PaginationRounded({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}) {
  const pageNumbers = [];

  const [page, setPage] = React.useState(currentPage);

  for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChange = (event, value) => {
    paginate(value);
    setPage(value);
  };

  return (
    <Stack spacing={2} sx={{ my: 4 }}>
      <Pagination
        count={pageNumbers.length}
        variant='outlined'
        shape='rounded'
        page={page}
        onChange={handleChange}
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </Stack>
  );
}
