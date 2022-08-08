import React from 'react';
import { Container } from '@mui/material';
import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import AddPost from './pages/AddPost/AddPost';
import FullPost from './pages/FullPost/FullPost';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { checkAuth, setAuth } from './redux/slices/AuthSlice';
import { useDispatch } from 'react-redux';
import Profile from './pages/Profile/Profile';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
    dispatch(setAuth(false));
  }, []);

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Container maxWidth="desktop">
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/post/:id" element={<FullPost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<DragAndDrop />} />
        </Routes>
      </Wrapper>
    </Container>
  );
}

export default App;
