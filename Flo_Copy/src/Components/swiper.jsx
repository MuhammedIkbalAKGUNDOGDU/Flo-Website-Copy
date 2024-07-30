// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Swiperelements from "./swiperelements";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={8}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-05/07/marka-widget-ljk.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/23-05/12/1-nike.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/23-05/12/4-inci.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/23-05/12/7-adidas.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/23-05/12/2-dockers.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/23-05/15/-396x505-1684156303.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/23-05/12/6-kinetix.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/23-07/10/puma-396x505.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/23-05/12/3-us-polo.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/23-07/10/polaris-396x505-1688972845.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-02/15/marka-widget-web-tonnyblack.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/23-05/12/10-lotto.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-02/15/marka-widget-web-mavi.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-02/15/marka-widget-web-damat.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
