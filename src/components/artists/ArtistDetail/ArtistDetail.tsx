import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArtistsList from "../ArtistList/ArtistsList";
import Card from "../../common/Card/Card";
import Button from "../../common/Button/Button";
import { ArtistContext } from "../../../ArtistsContext";

import { Artist } from '../../../types';

import { getArtistDetails, getSimilarArtists } from "../../../api/artists";

import "./ArtistDetail.css";

const ArtistDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [similarArtists, setSimilarArtists] = useState<Artist[]>([]);
  const { favoriteArtists, addArtist, removeArtist } = useContext(
    ArtistContext
  );
  const genres = artist? artist.genres : []
  const primaryGenres = genres.filter((genre) => genre.is_primary);
  const secondaryGenres = genres.filter((genre) => !genre.is_primary);
  const additionalGenres = secondaryGenres.length > 0 ? secondaryGenres.map((genre) => genre.name).join(', ') : '';
  const primaryGenre = primaryGenres.length > 0 ? primaryGenres[0].name : '';

  const isFavorite = favoriteArtists.some(
    (favArtist: any) => favArtist.id.toString() === id
  );

  useEffect(() => {
    getArtistDetails(Number(id)).then((data) => {
      if (data) {
        setArtist(data.data[0]);
      }
    });

    getSimilarArtists(Number(id)).then((data) => {
      if (data) {
        setSimilarArtists(data.data);
      }
    });
  }, [id, favoriteArtists]);
  

  const onAddBtnClick = () => {
    if(artist) addArtist(artist);
  };

  const onRemoveBtnClick = () => {
    if(artist) removeArtist(artist.id);
  };

  return (
    <>
      <Button onClick={() => navigate(`/`)}>Back to Search</Button>
      { artist && (
        <Card>
          <div className="info">
            <div className="header">
              <img src={artist.image} alt={artist.name} />
              <div className="description">
                <b>{artist.name}</b>
                <p>Primary Genre: {primaryGenre}</p>
                <p>Popularity Score: {artist.popularity}</p>
              </div>
            </div>

            <div className="footer">
              <p>Additional Genres: {additionalGenres}</p>
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
          </div>
        </Card>
      )}
      {similarArtists.length > 0 && <ArtistsList artists={similarArtists} />}
    </>
  );
};

export default ArtistDetail;