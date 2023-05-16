import React, { useState, createContext, useEffect } from "react";

export const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
    const [favoriteArtists, setFavoriteArtists] = useState(
      JSON.parse(localStorage.getItem('favoriteArtists')) || []
    );

    useEffect(() => {
      localStorage.setItem('favoriteArtists', JSON.stringify(favoriteArtists));
    }, [favoriteArtists]);


    const addArtist = (artist) => {
        setFavoriteArtists(prevArtists => {
          const artistExists = prevArtists.some(existingArtist => existingArtist.id === artist.id);
          
          if (!artistExists) {
            return [...prevArtists, artist];
          }
          return prevArtists;
        });
      }

    const removeArtist = (id) => {
        setFavoriteArtists(prevArtists => prevArtists.filter(artist => artist.id !== id));
    }
  
    return (
      <ArtistContext.Provider value={{ favoriteArtists, addArtist, removeArtist }}>
        {children}
      </ArtistContext.Provider>
    );
  };