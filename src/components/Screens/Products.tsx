import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "../LoadingAnimation";
import ProductList from "../ProductList";
import RotatingWordsAnimation from "../RotatingWordsAnimation";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `https://3622lj7vfb.execute-api.us-east-1.amazonaws.com/products/items`,
    };

    axios
      .request(options)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content">
        <RotatingWordsAnimation />
        {loading ? (
          <LoadingAnimation />
        ) : (
          <ProductList items={products} placeholder={"all products"} />
        )}
      </div>
    </>
  );
}

export default Products;
