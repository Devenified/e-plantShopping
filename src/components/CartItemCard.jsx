function CartItemCard({ item, onIncrease, onDecrease, onDelete, calculateTotalCost }) {
  return (
    <article className="cart-card">
      <img className="cart-image" src={item.image} alt={item.name} />
      <div className="cart-card-content">
        <div className="cart-card-header">
          <div>
            <h3>{item.name}</h3>
            <p className="cart-meta">Unit price: {item.cost}</p>
            <p className="cart-meta">Subtotal: ${calculateTotalCost(item).toFixed(2)}</p>
          </div>
          <button type="button" className="text-button danger-text" onClick={() => onDelete(item.name)}>
            Delete
          </button>
        </div>

        <div className="quantity-controls">
          <button type="button" className="quantity-button" onClick={() => onDecrease(item)}>
            -
          </button>
          <span className="quantity-value">{item.quantity}</span>
          <button type="button" className="quantity-button" onClick={() => onIncrease(item)}>
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItemCard;
