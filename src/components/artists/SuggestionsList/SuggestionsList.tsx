import React from "react";
import { Genre } from '../../../types';

import './SuggestionsList.css'

interface SuggestionsListProps {
  genres: Genre[];
  onGenreClick: (genreName: string) => void;
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({ genres, onGenreClick }) => {
  return (
    <ul className="list">
      {genres.map((genre) => (
        <li key={genre.id} onClick={() => onGenreClick(genre.name)}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default SuggestionsList;