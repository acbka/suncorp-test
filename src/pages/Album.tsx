import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const AlbumPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 150px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Album = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json: Photo[]) => {
        setPhotos(json);
      });
  }, []);

  return (
    <AlbumPage>
      <h1>Album</h1>
      {photos?.length ? (
        <AlbumContainer>
          {photos?.map((photo) => (
            <PhotoCard key={photo.id}>
              <StyledLink to={`/photo/${photo.id}`}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <p>{photo.title}</p>
              </StyledLink>
            </PhotoCard>
          ))}
        </AlbumContainer>
      ) : (
        <Spinner />
      )}
    </AlbumPage>
  );
};

export default Album;
