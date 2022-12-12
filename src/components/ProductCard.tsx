import "../css/sideMenu.css";
import "../css/productCard.css";
import { useNavigate } from "react-router";

function ProductCard(props: {
  name: string;
  imgSrc: any;
  categoryId?: string;
}) {
  const navigate = useNavigate();

  function navigateToCategory(categoryName: string, categoryId?: string) {
    navigate(`/category/${categoryId}?category_name=${categoryName}`);
  }
  return (
    <>
      {props.categoryId ? (
        <div
          className="product-card hoverable"
          onClick={() => {
            navigateToCategory(props.name, props.categoryId);
          }}
        >
          <div className="img-container">
            <img loading="lazy" alt={props.name} src={props.imgSrc} />
          </div>
          <span className="product-name">{props.name}</span>
          <div className="product-name-bottom"></div>
        </div>
      ) : (
        <div className="product-card">
          <div className="img-container">
            <img alt={props.name} src={props.imgSrc} />
          </div>
          <span className="product-name">{props.name}</span>
          <div className="product-name-bottom"></div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
