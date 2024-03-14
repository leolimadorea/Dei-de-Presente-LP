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
      slidesPerView={2}
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
        <img src="/casamento.svg" alt="casamento" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/balada.svg" alt="balada" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/aniver.svg" alt="aniver" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/casamento.svg" alt="casamento again" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/balada.svg" alt="balada again" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/aniver.svg" alt="aniver again" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/casamento.svg" alt="casamento again" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/balada.svg" alt="balada again" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/aniver.svg" alt="aniver again" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
