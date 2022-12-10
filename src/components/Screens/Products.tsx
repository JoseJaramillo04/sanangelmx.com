import axios from "axios";
import { useEffect, useState } from "react";
import RotatingWordsAnimation from "../RotatingWordsAnimation";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `http://localhost:8000/products/items`,
    };

    axios
      .request(options)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="content">
        <RotatingWordsAnimation />
        <div className="category-content">
          <table>
            {products.map((item: any) => (
              <tr>
                <td className="tr-name">{item.name}</td>
                <td className="tr-time">last modified: {item.modifiedTime}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
