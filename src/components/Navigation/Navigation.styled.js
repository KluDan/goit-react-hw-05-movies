import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationBar = styled.nav`
  display: flex;
  background-color: #000000;
  padding-block: 20px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  padding-inline: 40px;
`;

export const NavListItem = styled.li`
  color: #e00812;
`;

export const Link = styled(NavLink)`
  font-size: 24px;
  padding: 8px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #e00812;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #e00812;
  }
`;
