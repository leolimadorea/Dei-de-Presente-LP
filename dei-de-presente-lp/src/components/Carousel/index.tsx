import SwiperCore, {
  default as Navigation,
  default as Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

const ImageCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>{<img src="/wedding.svg" />}</SwiperSlide>
      <SwiperSlide>{<img src="/nightclub.svg" />}</SwiperSlide>
      <SwiperSlide>{<img src="/birthday.svg" />}</SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
