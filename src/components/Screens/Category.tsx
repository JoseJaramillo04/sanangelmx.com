import { useParams, useSearchParams } from "react-router-dom";
import SideMenu from "../SideMenu";

import "../../css/category.css";
import CategoryHeader from "../CategoryHeader";
import { useEffect, useState } from "react";
import axios from "axios";

import ProductList from "../ProductList";
import LoadingAnimation from "../LoadingAnimation";

function Category(props: { categoryTitle?: string }) {
  let { categoryId } = useParams();
  const [params] = useSearchParams();
  const [categoryName, setCategoryName] = useState(
    params.get("category_name") ?? ""
  );

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategoryName = () => {
    const options = {
      method: "GET",
      url: `http://localhost:8000/categories/name/${categoryId}`,
    };

    axios
      .request(options)
      .then((response) => {
        setCategoryName(response.data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `http://localhost:8000/categories/${categoryId}`,
    };

    axios
      .request(options)
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

    setCategoryName(params.get("category_name") ?? "");

    if (categoryName === "") {
      getCategoryName();
    }
  }, [categoryId]);

  return (
    <div className="category-section">
      <div className="fair-top-padding" />
      <div className="side-menu-container">
        <SideMenu />
        <div className="content">
          <CategoryHeader name={categoryName} />
          {loading ? (
            <LoadingAnimation />
          ) : (
            <ProductList items={items} placeholder={categoryName} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
