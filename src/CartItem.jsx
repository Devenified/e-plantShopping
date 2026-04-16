import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const calculateTotalCost = (item) => parseFloat(item.cost.substring(1)) * item.quantity;

  const calculateTotalAmount = () =>
    cartItems.reduce((sum, item) => sum + calculateTotalCost(item), 0);

  const onContinueShopping = (e) => {
    e.preventDefault();
    navigate('/products');
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  return (
    <div className="page-shell">
      <Header />
      <main className="page-content">
        <section className="page-intro cart-intro">
          <div>
            <p className="eyebrow">Shopping cart</p>
            <h1>Your nursery selections</h1>
            <p>Review your plants, update quantities, and continue when everything looks right.</p>
          </div>

          <div className="cart-summary">
            <p>Total cart amount: {itemCount}</p>
            <p>Total cost: ${calculateTotalAmount().toFixed(2)}</p>
          </div>
        </section>

        {cartItems.length > 0 ? (
          <>
            <section className="cart-list">
              {cartItems.map((item) => (
                <article key={item.name} className="cart-card">
                  <img className="cart-image" src={item.image} alt={item.name} />
                  <div className="cart-card-content">
                    <div className="cart-card-header">
                      <div>
                        <h3>{item.name}</h3>
                        <p className="cart-meta">Unit price: {item.cost}</p>
                        <p className="cart-meta">
                          Total cost: ${calculateTotalCost(item).toFixed(2)}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-button danger-text"
                        onClick={() => handleRemove(item.name)}
                      >
                        Delete
                      </button>
                    </div>

                    <div className="quantity-controls">
                      <button
                        type="button"
                        className="quantity-button"
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        type="button"
                        className="quantity-button"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <div className="cart-actions">
              <Link
                to="/products"
                className="button secondary-button"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </Link>
              <button type="button" className="button" onClick={handleCheckoutShopping}>
                Checkout
              </button>
            </div>
          </>
        ) : (
          <section className="empty-cart">
            <h2>Your cart is empty.</h2>
            <p>Add a few plants to build your indoor garden.</p>
            <Link to="/products" className="button">
              Continue Shopping
            </Link>
          </section>
        )}
      </main>
    </div>
  );
}

export default CartItem;
