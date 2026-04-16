import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';

function ProductsPage({ sections }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="page-shell">
      <Header />
      <main className="page-content">
        <section className="page-intro">
          <p className="eyebrow">Plant catalog</p>
          <h1>Browse our house plants by mood and purpose.</h1>
          <p>
            Choose fragrance-forward picks for welcoming rooms or wellness-focused greens for a
            calmer daily ritual.
          </p>
        </section>

        {sections.map((section) => (
          <section key={section.id} className="plant-section">
            <div className="section-heading">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>

            <div className="plant-grid">
              {section.plants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={{ ...plant, sectionTitle: section.title }}
                  isInCart={cartItems.some((item) => item.name === plant.name)}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductsPage;
