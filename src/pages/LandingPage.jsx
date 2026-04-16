import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Indoor plant studio</p>
          <h1>Paradise Nursery brings fresh energy to every corner of your home.</h1>
          <p className="hero-text">
            Discover aromatic and medicinal plants chosen for beauty, easy care, and everyday
            wellness. Build your own indoor sanctuary with a nursery collection designed for modern
            living spaces.
          </p>
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

export default LandingPage;
