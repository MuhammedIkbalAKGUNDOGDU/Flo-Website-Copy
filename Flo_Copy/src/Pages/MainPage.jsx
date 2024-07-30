import React from "react";
import FirstRow from "../Components/FirstRow";
import NavigationBar from "../Components/NavigationBar";
import Header from "../Components/Header";
import Banner from "../Components/banner";
import Mainpageads from "../Components/mainpageads";
import Doubleads from "../Components/doubleads";
import Swiper from "../Components/swiper";
const MainPage = () => {
  return (
    <div>
      <FirstRow></FirstRow>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Mainpageads
        link={
          "https://floimages.mncdn.com/media/catalog/product/img/banners/24-07/19/erkek-tekli-bu-yu-k-yaz-i-ndirimi-yazin-en-sevilenleri-1721395885.jpg.webp"
        }
      />
      <Mainpageads
        link={
          "https://floimages.mncdn.com/media/catalog/product/img/banners/24-07/25/tekli-web-sec-ili-u-ru-nlerde-2-u-ru-ne-50-i-ndirim-kupon.jpg.webp"
        }
      />
      <Mainpageads
        link={
          "https://floimages.mncdn.com/media/catalog/product/img/banners/24-07/17/bu-yu-k-yaz-i-ndirimi-c-ati-tekli.jpg.webp"
        }
      />
      <Doubleads
        link1={
          "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-07/25/bu-yu-k-yaz-i-ndirimi-erkek-nike-1721904549.jpg.webp?w=768"
        }
        link2={
          "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-07/19/bu-yu-k-yaz-i-ndirimi-erkek-sandalet-terlik-1721367514.jpg.webp?w=768"
        }
      />
      <Doubleads
        link1={
          "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-07/25/bu-yu-k-yaz-i-ndirimi-erkek-giyim-1721885812.jpg.webp?w=768"
        }
        link2={
          "https://floimages.mncdn.com/mnresize/768/-/media/catalog/product/img/banners/24-07/25/bu-yu-k-yaz-i-ndirimi-erkek-dinamik-sneaker-1721885868.jpg.webp?w=768"
        }
      />
      <Mainpageads
        link={
          " https://floimages.mncdn.com/media/catalog/product/img/banners/24-07/25/mp-erkek-slazenger-1600x429.jpg.webp"
        }
      />
      <Swiper></Swiper>
    </div>
  );
};

export default MainPage;
