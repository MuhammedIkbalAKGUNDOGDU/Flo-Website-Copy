// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Swiperelements from "./swiperElementLike";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-03/11/casual-durus-540x840.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>

        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-03/11/sneaker-trendleri-540x840.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>

        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-07/09/erkek-tshirt.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-05/24/dikey-widget-erkek-sezon-klasik-s-iklik.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-03/11/rahat-adimlar-540x840.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>

        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-03/11/kos-u-yu-ru-yu-s-540x840.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>

        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-07/16/o-ne-c-ikan-kategoriler-tamamlayici-aksesuar.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>

        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-03/11/giyimde-yeni-gelenler-540x840.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-03/26/sirt-c-antalari-540x840.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
        <SwiperSlide>
          <Swiperelements
            link={
              "https://floimages.mncdn.com/media/catalog/product/img/banners/24-03/11/ayakkabi-ve-giyim-trendi-540x840.jpg"
            }
          ></Swiperelements>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
