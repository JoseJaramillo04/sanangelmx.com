import Lottie from "lottie-react";

function LoadingAnimation() {
  return (
    <div className="loading-animation">
      <Lottie animationData={require("../assets/animations/loading.json")} />
    </div>
  );
}

export default LoadingAnimation;
