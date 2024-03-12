import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ImageCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      centeredSlides={true}
    >
      <SwiperSlide>{<img src="/wedding.svg" />}</SwiperSlide>
      <SwiperSlide>{<img src="/nightclub.svg" />}</SwiperSlide>
      <SwiperSlide>{<img src="/birthday.svg" />}</SwiperSlide>
      <SwiperSlide>{<img src="/wedding.svg" />}</SwiperSlide>
      <SwiperSlide>{<img src="/nightclub.svg" />}</SwiperSlide>
      <SwiperSlide>{<img src="/birthday.svg" />}</SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
