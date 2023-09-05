import styled from 'styled-components';
export const MoviesGalleryItemBackground = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MoviesGalleryItemBlock = styled.a`
  display: block;
  position: relative;
  padding-bottom: 40%;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(
      to bottom,
      rgba(30, 31, 33, 0.9) 0,
      rgba(30, 31, 33, 0) 100%
    );
  }
`;
export const MoviesGalleryItemImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
  padding-top: 82px;
  box-sizing: border-box;
  height: 76vh;
  max-height: 56.25vw;
  min-height: 450px;
  margin-bottom: 40px;
`;
export const MovieContent = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  color: #fff;
  padding: 10vw 40px 0;
  background: linear-gradient(
    to bottom,
    rgba(30, 31, 33, 0) 0%,
    rgba(30, 31, 33, 0.8) 40%,
    rgba(30, 31, 33, 1) 100%
  );
`;
export const MoviePoster = styled.div`
  position: relative;
  flex-shrink: 0;
  margin-right: 2.5vw;
  height: 18vw;
  width: 12vw;
  background: rgba(255, 255, 255, 0.05);
  img {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

export const MovieDescr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2vw 0;
`;
export const MovieTitle = styled.h2`
  font-size: 48px;
`;
export const MovieShortDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 24px;
`;
export const MovieShortDetailsSpan = styled.span`
  display: flex;
  align-items: center;
`;
export const MovieDescrText = styled.p`
  font-size: 24px;
  line-height: 30px;
  max-width: 800px;
`;
