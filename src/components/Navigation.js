import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
};
