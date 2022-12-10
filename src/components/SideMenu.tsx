import axios from "axios";
import { useEffect, useState } from "react";
import "../css/sideMenu.css";
function SideMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `http://localhost:8000/categories`,
    };

    axios
      .request(options)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="side-menu">
      <h4>Categories</h4>
      <div className="category-list">
        {categories.map((category: any) => (
          <span id={category.id}>{category.name}</span>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
