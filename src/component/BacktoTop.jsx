import React, { useEffect, useState } from "react";

export default function BacktoTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-btn">
          ↑
        </button>
      )}

      
      <style>
        {`
          .back-to-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #dc3545;
            color: white;
            border: none;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            z-index: 1000;
          }

          .back-to-top-btn:hover {
            background-color: #a71d2a;
            transform: scale(1.1);
          }
        `}
      </style>
    </>
  );
}
