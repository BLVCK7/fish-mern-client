import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AddPost from './pages/AddPost/AddPost';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
