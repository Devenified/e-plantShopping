import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import CartItemCard from '../components/CartItemCard';
import { removeItem, updateQuantity } from '../CartSlice';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const calculateTotalCost = (item) => parseFloat(item.cost.substring(1)) * item.quantity;

  const calculateTotalAmount = () =>
    cartItems.reduce((sum, item) => sum + calculateTotalCost(item), 0);

  const handleContinueShopping = () => {};

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
            <p>Review your plants, adjust quantities, and move forward when everything looks right.</p>
          </div>

          <div className="cart-summary">
            <p>Total plants: {itemCount}</p>
            <p>Total cost: ${calculateTotalAmount().toFixed(2)}</p>
          </div>
        </section>

        {cartItems.length > 0 ? (
          <>
            <section className="cart-list">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item.name}
                  item={item}
                  onIncrease={handleIncrement}
                  onDecrease={handleDecrement}
                  onDelete={handleRemove}
                  calculateTotalCost={calculateTotalCost}
                />
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

export default CartPage;
