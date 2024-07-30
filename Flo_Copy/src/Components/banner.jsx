import React, { useState, useEffect } from "react";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setBanner([
      "https://floimages.mncdn.com/media/catalog/product/img/banners/24-07/25/slider-web-ayin-c-ok-satanlari.jpg.webp",
      "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-05/22/slider-app-mp-1716375404.jpg.webp?w=768",
      "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-07/01/maksimum-slider-800x200.jpg?w=768",
      "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-07/01/800x200.jpg?w=768",
      "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/23-10/07/slider-app-tr-1-numarali.jpg?w=768",
    ]);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [banner.length]);

  return (
    <div className="banner-container">
      {banner.length > 0 && <img src={banner[currentIndex]} alt="Banner" />}
    </div>
  );
};

export default Banner;
