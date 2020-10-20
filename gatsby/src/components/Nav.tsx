import { Link } from 'gatsby';

const Nav: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizzas/">Pizza Menu</Link>
      </li>
      <li>
        <Link to="/">Slick's Slices</Link>
      </li>
      <li>
        <Link to="/slicemasters">SliceMasters</Link>
      </li>
      <li>
        <Link to="/order">Order Ahead!</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
