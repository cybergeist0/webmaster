import React, { useState, useEffect } from "react";

const SuspenseWrapper = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 0); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fade-in-container ${isLoaded ? "loaded" : ""}`}>
      {children}
    </div>
  );
};

export default SuspenseWrapper;
