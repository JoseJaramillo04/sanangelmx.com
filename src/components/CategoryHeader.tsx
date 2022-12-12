function CategoryHeader(props: { name?: string; categoryId: string }) {
  const map = new Map([
    ["KWX2HY75G7RDE", "licensed/arbol-header.webp"],
    ["GE4A0Z28G5RYW", "licensed/chile-molido.webp"],
    ["EZP1K61ZYDWT6", "licensed/spices-header.webp"],
    ["JK00BXF5QSRQ0", "licensed/pepita.webp"],
    ["4GCC7V8XAV1A8", "licensed/cacahuate-salado.webp"],
    ["J9WC4J4Q6Q6SE", "licensed/miel.webp"],
    ["MY4JG6CAKZJCT", "licensed/bolsa.webp"],
    ["Y08X21ERVKKYG", "licensed/vaso.webp"],
    ["86GMR15R3ZZ4G", "licensed/escoba.webp"],
    ["E9DVHNA90H6Q2", "licensed/mesh.webp"],
    ["XD1XZ6XH4HYXC", "licensed/jarritos.webp"],
  ]);

  return (
    <div className="category-header">
      <img
        loading="eager"
        className="category-header-img"
        src={require(`../assets/${
          map.has(props.categoryId)
            ? map.get(props.categoryId)
            : "photos/pullaC.jpg"
        }`)}
        alt="header"
      />
      <h2>{props.name}</h2>
    </div>
  );
}

export default CategoryHeader;
