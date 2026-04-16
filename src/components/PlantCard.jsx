function PlantCard({ plant, isInCart, onAddToCart }) {
  return (
    <article className="plant-card">
      <img className="plant-image" src={plant.image} alt={plant.name} />
      <div className="plant-card-body">
        <div className="plant-card-top">
          <div>
            <h3>{plant.name}</h3>
            <p className="plant-price">${plant.price.toFixed(2)}</p>
          </div>
          <span className="plant-chip">{plant.sectionTitle}</span>
        </div>
        <p className="plant-description">{plant.description}</p>
        <button
          type="button"
          className={`button add-button ${isInCart ? 'button-muted' : ''}`}
          onClick={() => onAddToCart(plant)}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}

export default PlantCard;
