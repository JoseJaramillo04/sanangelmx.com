import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { categoryType } from "../assets/types";
import "../css/sideMenu.css";

import LoadingAnimation from "./LoadingAnimation";
function SideMenu() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const dissapearNav = () => {
    if (window.innerWidth < 800) {
      $(".category-list").css("display", "none");
      $(".check-cat").prop("checked", false);
    }
  };

  const displayList = () => {
    if ($(".check-cat").is(":checked")) {
      $(".category-list").css("display", "flex");
      $(".category-list").css("flex-direction", "column");
      $(".category-list").css("align-self", "center");
      $(".category-list").css("width", "85%");
      $(".category-list").css("margin", "0 auto");
      $(".category-list").css("padding-top", "10px");
    } else {
      dissapearNav();
    }
  };

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `http://localhost:8000/category`,
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
      <input
        type="checkbox"
        id="check-cat"
        className="check-cat"
        onChange={displayList}
      />
      <label htmlFor="check-cat" className="check-cat-label">
        <span></span>
      </label>
      <h4>Categories</h4>

      <div className="category-list">
        {loading ? (
          <LoadingAnimation />
        ) : categories.length !== 0 ? (
          categories.map((category: categoryType) => (
            <span
              key={"category" + category.id}
              id={category.id}
              className="category-choice"
              onClick={() => {
                navigateToCategory(category.id, category.name);
                dissapearNav();
              }}
            >
              {category.name}
            </span>
          ))
        ) : (
          <span className="red bold error-msg">Error: Database not Found!</span>
        )}
      </div>
    </div>
  );
}

export default SideMenu;
