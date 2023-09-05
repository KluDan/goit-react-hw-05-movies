import { NavigationBar, NavList, NavListItem, Link } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationBar>
      <NavList>
        <NavListItem>
          <Link to="/">Home</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/Movies">Movies</Link>
        </NavListItem>
      </NavList>
    </NavigationBar>
  );
};
