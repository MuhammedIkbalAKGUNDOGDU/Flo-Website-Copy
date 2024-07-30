import React, { useState, useEffect, useRef } from "react";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    setBanner([
      "https://floimages.mncdn.com/media/catalog/product/img/banners/24-07/25/slider-web-ayin-c-ok-satanlari.jpg.webp",
      "https://floimages.mncdn.com/media/catalog/product/img/banners/24-05/30/c-ok-al-azo-de-1200x160.jpg.webp",
      "https://floimages.mncdn.com/media/catalog/product/img/banners/24-07/01/maksimum-1200x160.jpg.webp",
      "https://floimages.mncdn.com/media/catalog/product/img/banners/24-07/01/1200x160.jpg.webp",
      "https://floimages.mncdn.com/media/catalog/product/img/banners/23-10/07/slider-tr-1-numarali.jpg.webp",
    ]);
  }, []);

  useEffect(() => {
    startInterval();

    return () => clearInterval(intervalId.current);
  }, [banner.length]);

  const startInterval = () => {
    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
    }, 3000);
  };

  const changeIndex = (indexNumber) => {
    setCurrentIndex(indexNumber);
    startInterval(); // Restart the interval when changing the index manually
  };

  return (
    <div className="banner-container">
      {banner.length > 0 && <img src={banner[currentIndex]} alt="Banner" />}
      <div className="banner-buttons">
        <div
          onClick={() => changeIndex(0)}
          className={`buttons ${currentIndex === 0 ? "active" : ""}`}
        ></div>
        <div
          onClick={() => changeIndex(1)}
          className={`buttons ${currentIndex === 1 ? "active" : ""}`}
        ></div>
        <div
          onClick={() => changeIndex(2)}
          className={`buttons ${currentIndex === 2 ? "active" : ""}`}
        ></div>
        <div
          onClick={() => changeIndex(3)}
          className={`buttons ${currentIndex === 3 ? "active" : ""}`}
        ></div>
        <div
          onClick={() => changeIndex(4)}
          className={`buttons ${currentIndex === 4 ? "active" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
