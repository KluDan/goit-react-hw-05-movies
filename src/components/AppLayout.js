import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { Navigation } from './Navigation';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 15px;
  max-width: 900px;
  margin: 0 auto;
`;

export const AppLayout = () => {
  return (
    <Container>
      <Navigation />
      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Container>
  );
};
