import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts/:id' element={<BlogPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
