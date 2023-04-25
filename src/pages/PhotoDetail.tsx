import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Photo } from "./Album";
import Spinner from "../components/Spinner";

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
  const { id } = useParams();

  const url = `http://jsonplaceholder.typicode.com/photos/${Number(id)}`;

  const photo = useFetch(url) as Photo;

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
