import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
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
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  margin: 10px;
  width: 150px;
  cursor: pointer;
`;

const Description = styled.p`
  padding: 0 15px;
  &:first-letter {
    text-transform: capitalize;
  }
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

export interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

const Album = () => {
  const url = "http://jsonplaceholder.typicode.com/photos";

  const photos = useFetch(url) as Photo[];

  return (
    <AlbumPage>
      <h1>Album</h1>
      {photos ? (
        <AlbumContainer>
          {photos?.map((photo) => (
            <PhotoCard key={photo.id}>
              <StyledLink to={`/photo/${photo.id}`}>
                <img src={photo.thumbnailUrl} alt={photo.title} />
                <Description>{photo.title}</Description>
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
