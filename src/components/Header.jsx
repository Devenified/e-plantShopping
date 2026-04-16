import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const itemCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <header className="site-header">
      <div className="brand-wrap">
        <Link to="/" className="brand-link">
          <span className="brand-mark">PN</span>
          <div>
            <p className="brand-name">Paradise Nursery</p>
            <p className="brand-tagline">Greener rooms. Calmer living.</p>
          </div>
        </Link>
      </div>

      <nav className="nav-links" aria-label="Primary navigation">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link">
          Plants
        </NavLink>
        <NavLink to="/cart" className="nav-link cart-link">
          Cart
          <span className="cart-count" aria-label={`${itemCount} items in cart`}>
            {itemCount}
          </span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
