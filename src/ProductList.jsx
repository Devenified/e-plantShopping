import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import Header from './components/Header';

function ProductList({ sections }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const addedToCart = cartItems.reduce((accumulator, item) => {
    accumulator[item.name] = true;
    return accumulator;
  }, {});

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
            Explore aromatic plants for fragrance, medicinal plants for everyday wellness, and
            air-purifying plants for fresher indoor spaces.
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
                <article key={plant.id} className="plant-card">
                  <img className="plant-image" src={plant.image} alt={plant.name} />
                  <div className="plant-card-body">
                    <div className="plant-card-top">
                      <div>
                        <h3>{plant.name}</h3>
                        <p className="plant-price">{plant.cost}</p>
                      </div>
                      <span className="plant-chip">{section.title}</span>
                    </div>
                    <p className="plant-description">{plant.description}</p>
                    <button
                      type="button"
                      className={`button add-button ${addedToCart[plant.name] ? 'button-muted' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <p className="cart-total-text">Cart items: {totalQuantity}</p>
      </main>
    </div>
  );
}

export default ProductList;
