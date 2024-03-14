import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, EffectCoverflow, Autoplay]}
      effect={"coverflow"}
      slidesPerView={3}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      loop={true}
      centeredSlides={true}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/wedding.svg" alt="Wedding" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/nightclub.svg" alt="Nightclub" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/birthday.svg" alt="Birthday" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/wedding.svg" alt="Wedding again" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/nightclub.svg" alt="Nightclub again" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/birthday.svg" alt="Birthday again" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/wedding.svg" alt="Wedding again" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/nightclub.svg" alt="Nightclub again" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/birthday.svg" alt="Birthday again" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
