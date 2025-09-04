import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navigation from '../components/Navigation';
import './App.css';

const App = () => {
  const [home, setHome] = useState([]);




    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage home={home} setHome ={setHome} />} />
              <Route path="/pokemon/:id" element={<PokemonDetailPage home={home} />} />
              <Route path="/profile/:id" element={<ProfilePage home={home} />} />
              <Route path="/team/:id" element={<TeamPage home={home} />} />
              <Route path="/favorite/:id" element={<FavoritePage home={home} />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
};








export default App;

