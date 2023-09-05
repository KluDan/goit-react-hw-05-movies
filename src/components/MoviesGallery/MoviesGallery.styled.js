import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesGalleryBlock = styled.ul`
  display: grid;
  max-width: 100%;
  margin: 0;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 30px;
  list-style: none;
  overflow: hidden;
  color: #fff;
`;

export const MoviesGalleryItemBlock = styled.li`
  cursor: pointer;
`;

export const MoviesTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  padding: 10px;
  color: #fff;
`;
export const MovieBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MoviesGalleryItem = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  object-position: center;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
`;
