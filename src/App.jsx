import { Navigate, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { plantSections } from './data/plants';

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Indoor plant studio</p>
          <h1>Welcome to Paradise Nursery</h1>
          <p className="hero-text">
            Discover a curated collection of aromatic, medicinal, and air-purifying house plants
            that bring freshness, style, and calm into your home.
          </p>
          <AboutUs />
          <Link to="/products" className="button hero-button">
            Get Started
          </Link>
        </div>

        <div className="hero-visual">
          <div className="hero-badge">Live plants, styled simply</div>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList sections={plantSections} />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
