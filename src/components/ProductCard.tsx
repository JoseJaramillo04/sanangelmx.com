import "../css/sideMenu.css";

function ProductCard() {
  return (
    <div className="product-card">
      <div className="img-container">
        <img alt="company-logo" src={require("../assets/photos/ajo.jpg")} />
      </div>
      <span className="product-name">Product Name</span>
      <div className="product-name-bottom"></div>
    </div>
  );
}

export default ProductCard;
