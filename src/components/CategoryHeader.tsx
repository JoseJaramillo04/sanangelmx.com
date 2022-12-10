function CategoryHeader(props: { name?: string }) {
  return (
    <div className="category-header">
      <img
        className="category-header-img"
        src={require("../assets/photos/pulla.jpg")}
        alt="header"
      />
      <h2>{props.name}</h2>
    </div>
  );
}

export default CategoryHeader;
