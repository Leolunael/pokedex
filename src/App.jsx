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
              <Route path="/" element={<HomePage />} />
              <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
              <Route path="/profile/" element={<ProfilePage />} />
              <Route path="/team/" element={<TeamPage />} />
              <Route path="/favorites/" element={<FavoritesPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
};








export default App;

