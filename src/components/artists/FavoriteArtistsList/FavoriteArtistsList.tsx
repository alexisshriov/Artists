import React, { useContext } from "react";
import { ArtistContext } from "../../../ArtistsContext";

import ArtistList from "../ArtistList/ArtistsList";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";

const FavoriteArtistsList: React.FC = () => {
  const navigate = useNavigate();
  const { favoriteArtists } = useContext(ArtistContext);

  return (
    <>
      <Button onClick={() => navigate(`/`)}>Back to Search</Button>
      <ArtistList artists={favoriteArtists} />
    </>
  );
};

export default FavoriteArtistsList;