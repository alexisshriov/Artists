import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArtistContext } from "../../../ArtistsContext";
import Card from "../../common/Card/Card";
import Button from "../../common/Button/Button";
import { Artist } from '../../../types';
import "./ArtistCard.css";

const ArtistCard = ({ artist }: { artist: Artist }) => {
  const { id, name, genres } = artist;
  const navigate = useNavigate();
  const { favoriteArtists, addArtist, removeArtist } = useContext(
    ArtistContext
  );
  const isFavorite = favoriteArtists.some((favArtist:any) => favArtist.id === id);
  const primaryGenres = genres.filter((genre) => genre.is_primary);
  const genre = primaryGenres.length > 0 ? primaryGenres[0].name : "";

  const onAddBtnClick = () => {
    addArtist(artist);
  };

  const onRemoveBtnClick = () => {
    removeArtist(id);
  };

  return (
    <Card>
      <div className="details">
        <img src={artist.image} alt={`${artist.name}`} />
        <div className="description">
          <b onClick={() => navigate(`/artists/${id}`)}>{name}</b>
          <p>{genre}</p>
        </div>
        <div>
          {isFavorite ? (
            <Button theme="red" onClick={onRemoveBtnClick}>
              Remove
            </Button>
          ) : (
            <Button theme="green" onClick={onAddBtnClick}>
              Add
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ArtistCard;