import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GenreSearch from "./components/artists/GenreSearch/GenreSearch";
import ArtistDetail from "./components/artists/ArtistDetail/ArtistDetail";
import FavoriteArtistsList from "./components/artists/FavoriteArtistsList/FavoriteArtistsList";
import { ArtistProvider } from "./ArtistsContext";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/favorites">Favorite Artists</Link>
      </nav>
      <ArtistProvider>
        <Routes>
          <Route path="/" index element={<GenreSearch />} />
          <Route path="/artists/:id" element={<ArtistDetail />} />
          <Route path="/favorites" element={<FavoriteArtistsList />} />
        </Routes>
      </ArtistProvider>
    </Router>
  );
}

export default App;
