import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AddPost from './pages/AddPost/AddPost';
import FullPost from './pages/FullPost/FullPost';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <Container fixed>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
