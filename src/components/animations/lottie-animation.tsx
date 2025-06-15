"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function ComingSoonLottie() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the animation JSON from the public folder
    fetch("/animations/coming-soon-white.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, []);

  return (
    <div className="max-w-md mx-auto my-12">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
