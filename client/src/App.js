import './App.css';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/bookingCar" element={<BookingCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
