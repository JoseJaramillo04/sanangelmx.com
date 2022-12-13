import cPulla from "../assets/photos/pulla.webp";
import cTamarindo from "../assets/licensed/tamarindo-header.webp";
import cGarlic from "../assets/licensed/garlic-header.webp";
import cSpices from "../assets/licensed/spices-header.webp";
import cArbol from "../assets/licensed/arbol-header.webp";
import cJamaica from "../assets/licensed/jamaica-header.webp";

export const popularCategories = [
  {
    name: "Dry Peppers",
    img: "licensed/ancho-small.webp",
    categoryId: "KWX2HY75G7RDE",
  },
  {
    name: "Herbs and Spices",
    img: "licensed/pimienta-small.webp",
    categoryId: "EZP1K61ZYDWT6",
  },
  {
    name: "Grains, Cereals, Seeds and Beans",
    img: "licensed/grains-small.webp",
    categoryId: "JK00BXF5QSRQ0",
  },
  {
    name: "Beverages",
    img: "licensed/mexican-coke.webp",
    categoryId: "952RKV8KRRCY6",
  },
  {
    name: "Plastic bags",
    img: "licensed/rollo-bolsa.webp",
    categoryId: "MY4JG6CAKZJCT",
  },
  {
    name: "Hot Sauce, Chamoy, artificial food flavors",
    img: "licensed/chamoy-small.webp",
    categoryId: "ZV0NZ0EBTWFCJ",
  },
  {
    name: "Mexican Candy",
    img: "licensed/dulces-small.webp",
    categoryId: "15XX57BC1V85J",
  },
  {
    name: "Mexican Chips",
    img: "licensed/sabritas-small.webp",
    categoryId: "F94R6P2FK902C",
  },
];

export const featuredProducts = [
  { name: "Dry Guajillo", img: "licensed/guajillo-small.webp" },
  { name: "Dry Ancho", img: "licensed/ancho-small.webp" },
  { name: "Garlic", img: "licensed/garlic-small.webp" },
  { name: "Hibiscus Flower", img: "licensed/jamaica-small.webp" },
  { name: "Pinto Beans", img: "licensed/pinto-small.webp" },
  { name: "Mayocoba Beans", img: "licensed/mayocoba-small.webp" },
  { name: "Corn Husks", img: "photos/hoja.webp" },
  { name: "Tamarind", img: "licensed/tamarind-small.webp" },
];

export const carouselData = [
  {
    name: "Chile Puya",
    desc: "Thrives in the Central Valley of Mexico,",
    moreInfoLink:
      "https://sibaris.com.mx/cdmx/blog/los-ingredientes-de-mexico-chile-puya",
    image: cPulla,
  },
  {
    name: "Purple Garlic",
    desc: "Purple garlic cloves are 'juicier',",
    moreInfoLink:
      "https://www.chovi.com/es/blog/nutricion/ajo-morado-mejor-aliado-salud/",
    image: cGarlic,
  },
  {
    name: "Spices",
    desc: "Cacao, Clove, M. Glutamate available!",
    moreInfoLink: "/category/EZP1K61ZYDWT6?category_name=Especias",
    image: cSpices,
  },
  {
    name: "Chile Arbol",
    desc: "Native to Mexico and Central America, ",
    moreInfoLink: "https://www.mexicodesconocido.com.mx/chile-de-arbol.html",
    image: cArbol,
  },
  {
    name: "Jamaica",
    desc: "Native to West Africa, ",
    moreInfoLink: "https://www.britannica.com/plant/roselle-plant",
    image: cJamaica,
  },
  {
    name: "Tamarindo",
    desc: "Sourced Jalisco, Colima and Michoacán, ",
    moreInfoLink:
      "https://www.gob.mx/agricultura/articulos/el-tamarindo-en-mexico-186350#:~:text=Los%20productores%20de%20los%20estados,super%C3%B3%20las%2049%20mil%20toneladas.",
    image: cTamarindo,
  },
];
