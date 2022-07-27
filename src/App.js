import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import AddPost from './pages/AddPost/AddPost';
import FullPost from './pages/FullPost/FullPost';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <Container maxWidth="desktop">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </Container>
  );
}

export default App;
