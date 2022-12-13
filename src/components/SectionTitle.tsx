import "../css/sectionTitle.css";

function SectionTitle(props: { title: string }) {
  return (
    <>
      <div className="fair-spacing"></div>
      <div className="section-container">
        <span className="section-title">{props.title}</span>
        <hr className="section-line" />
      </div>
    </>
  );
}

export default SectionTitle;
