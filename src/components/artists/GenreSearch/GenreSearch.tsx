import React, { useState, ChangeEvent } from "react";
import { fetchGenres, fetchArtistsByGenre } from "../../../api/artists";
import SuggestionsList from "../SuggestionsList/SuggestionsList";
import ArtistsList from "../ArtistList/ArtistsList";
import { Artist, Genre } from '../../../types';
import "./GenreSearch.css";

const GenreSearch: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [searched, setSearched] = useState(false); 

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      const { data } = await fetchGenres(value, 4);
      setGenres(data);
    } else {
      setGenres([]);
    }
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => setGenres([]), 100);
  };

  const handleGenreClick = async (name: string) => {
    const { data } = await fetchArtistsByGenre(name);

    setArtists(data);
    setSearched(true);
  };

  return (
    <>
      <input onChange={handleChange} onBlur={onBlur} placeholder="Enter a genre to find artists" />
      {genres.length > 0 && (
        <SuggestionsList genres={genres} onGenreClick={handleGenreClick} />
      )}
      {artists.length > 0 ? (
        <ArtistsList artists={artists} />
      ) : (
        searched && <p>No artists found</p>
      )}
    </>
  );
}

export default GenreSearch;