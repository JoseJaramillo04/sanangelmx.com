import "../css/rotatingWordsAnimation.css";

function RotatingWordsAnimation() {
  return (
    <div className="animation">
      <div className="animation-first-row">
        <span>Need</span>
        <div className="words">
          <span className="special">{" " + ""}</span>
          <span className="special">Costeño Peppers?</span>
          <span className="special">Rice Beans?</span>
          <span className="special">M. Glutamate?</span>
          <span className="special">a Special order?</span>
        </div>
      </div>
      <span>We have them!</span>
    </div>
  );
}

export default RotatingWordsAnimation;
