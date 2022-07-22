import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import AddPost from './pages/AddPost/AddPost';
import FullPost from './pages/FullPost/FullPost';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
