import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../css/sideMenu.css";
import LoadingAnimation from "./LoadingAnimation";
function SideMenu() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `http://localhost:8000/categories`,
    };

    axios
      .request(options)
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  function navigateToCategory(categoryId: string, categoryName: string) {
    navigate(`/category/${categoryId}?category_name=${categoryName}`);
  }

  return (
    <div className="side-menu">
      <h4>Categories</h4>
      <div className="category-list">
        {loading ? (
          <LoadingAnimation />
        ) : categories.length !== 0 ? (
          categories.map((category: any) => (
            <span
              key={"category" + category.id}
              id={category.id}
              onClick={() => {
                navigateToCategory(category.id, category.name);
              }}
            >
              {category.name}
            </span>
          ))
        ) : (
          <span className="red bold">Error: Database not Found!</span>
        )}
      </div>
    </div>
  );
}

export default SideMenu;
