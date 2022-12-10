import "../css/sideMenu.css";
import "../css/productCard.css";

function ProductCard(props: { name: string; imgSrc: any }) {
  return (
    <div className="product-card">
      <div className="img-container">
        <img alt={props.name} src={props.imgSrc} />
      </div>
      <span className="product-name">{props.name}</span>
      <div className="product-name-bottom"></div>
    </div>
  );
}

export default ProductCard;
