import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { Navigation } from './Navigation/Navigation';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const StyledOutletWrapper = styled.div`
  background-color: #1f2022;
  min-height: 100vh;
  padding-bottom: 30px;
`;
export const AppLayout = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <StyledOutletWrapper>
          <Outlet />
        </StyledOutletWrapper>
      </Suspense>
      <Toaster />
    </Container>
  );
};
