import React from 'react';
import { Container, Stack } from '@mui/material';
import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import AddPost from './pages/AddPost/AddPost';
import FullPost from './pages/FullPost/FullPost';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { checkAuth } from './redux/slices/AuthSlice';
import { useDispatch } from 'react-redux';
import Profile from './pages/Profile/Profile';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Container maxWidth="laptop">
      <Wrapper>
        <Navbar />
        <Stack sx={{ mt: '100px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/post/:id" element={<FullPost />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/test" element={<AddPostForm />} /> */}
          </Routes>
        </Stack>
      </Wrapper>
    </Container>
  );
}

export default App;
