import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Photo } from "./Album";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledButton = styled.button`
  margin: 20px;
  height: 50px;
  width: 150px;
  cursor: pointer;
`;

const PhotoDetail = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState<Photo>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/photos/${Number(id)}`)
      .then((response) => response.json())
      .then((json: Photo) => setPhoto(json));
  }, [id]);

  return (
    <Container>
      <StyledButton onClick={() => navigate("/", { replace: true })}>
        Back
      </StyledButton>
      {photo ? <img src={photo.url} alt={photo.title} /> : <Spinner />}
    </Container>
  );
};

export default PhotoDetail;
