import React from 'react';
import App from '../App';
import {
  PageTitle,
  MovieZip,
  MovieContainer,
  MovieImage,
  MovieTitle,
  MovieOverview,
  OverviewContainer,
} from './Movie.style';

function Movie() {
  return (
    <MovieContainer>
      <MovieImage>{/* Your image content */}</MovieImage>
      <MovieTitle>{/* Movie title content */}</MovieTitle>
      <MovieOverview>{/* Movie overview content */}</MovieOverview>
      <OverviewContainer>{/* Overview container content */}</OverviewContainer>
    </MovieContainer>
  );
}

export default Movie;
