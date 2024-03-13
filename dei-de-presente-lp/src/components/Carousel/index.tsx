import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

const ImageCarousel: React.FC = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect="coverflow"
        navigation
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>{<img src="/wedding.svg" />}</SwiperSlide>
        <SwiperSlide>{<img src="/nightclub.svg" />}</SwiperSlide>
        <SwiperSlide>{<img src="/birthday.svg" />}</SwiperSlide>
        <SwiperSlide>{<img src="/wedding.svg" />}</SwiperSlide>
        <SwiperSlide>{<img src="/nightclub.svg" />}</SwiperSlide>
        <SwiperSlide>{<img src="/birthday.svg" />}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
