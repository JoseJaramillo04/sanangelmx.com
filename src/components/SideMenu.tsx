import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../css/sideMenu.css";

import LoadingAnimation from "./LoadingAnimation";
function SideMenu() {
  const [categories, setCategories] = useState([
    { id: "KWX2HY75G7RDE", name: "Chiles Secos", sortOrder: 0 },
    {
      id: "JK00BXF5QSRQ0",
      name: "Semillas, Cereales y Frutos Secos",
      sortOrder: 1,
    },
    { id: "EZP1K61ZYDWT6", name: "Especias", sortOrder: 2 },
    { id: "GE4A0Z28G5RYW", name: "Chile Molido", sortOrder: 3 },
    { id: "4GCC7V8XAV1A8", name: "Botanas", sortOrder: 4 },
    { id: "T8MN186ZTXCKW", name: "Bebidas por Pieza", sortOrder: 5 },
    { id: "952RKV8KRRCY6", name: "Bebidas por Caja", sortOrder: 6 },
    { id: "F94R6P2FK902C", name: "Sabritas Mexicanas", sortOrder: 7 },
    { id: "V3T9EQ8MPC1BE", name: "Galletas", sortOrder: 8 },
    { id: "15XX57BC1V85J", name: "Dulces", sortOrder: 9 },
    {
      id: "ZV0NZ0EBTWFCJ",
      name: "Salsas, Chamoys y Saborizantes ",
      sortOrder: 10,
    },
    { id: "J9WC4J4Q6Q6SE", name: "Abarrotes", sortOrder: 11 },
    { id: "MY4JG6CAKZJCT", name: "Bolsas", sortOrder: 12 },
    { id: "Y08X21ERVKKYG", name: "Desechables", sortOrder: 13 },
    { id: "E9DVHNA90H6Q2", name: "Plasticos", sortOrder: 14 },
    { id: "SYNQ4XPYPKVNM", name: "Snack", sortOrder: 15 },
    { id: "86GMR15R3ZZ4G", name: "Artículos de Limpieza", sortOrder: 16 },
    { id: "XD1XZ6XH4HYXC", name: "Artículos Artesanales", sortOrder: 17 },
    { id: "5ASKWWDW2773Y", name: "Otros", sortOrder: 18 },
    { id: "5211GX6W349NW", name: "Add Custom Item", sortOrder: 19 },
    {
      id: "94A1BMC858PB0",
      name: "Botanas $1.00",
      sortOrder: 20,
      colorCode: "#A21318",
    },
    {
      id: "F4WYRVJFYE4DT",
      name: "Galletas Y Dulces Por Pieza",
      sortOrder: 21,
      colorCode: "#CF6B9F",
    },
  ]);
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
      url: `http://localhost:8000/categories`,
    };

    axios
      .request(options)
      .then((response) => {
        //setCategories(response.data);
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
          categories.map((category: any) => (
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
