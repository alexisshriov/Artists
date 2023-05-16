import React from "react";

import ArtistCard from "../ArtistCard/ArtistCard";
import { Artist } from '../../../types';

interface ArtistsListProps {
  artists: Artist[];
}

const ArtistsList: React.FC<ArtistsListProps> = ({ artists }) => {
  if(artists.length > 0 ){
    return (
      <>{artists.map(artist => <ArtistCard key={artist.id} artist={artist} />)}</>
    );
  }

  return <p>No artists added to the list yet</p>
}

export default ArtistsList;