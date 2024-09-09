import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider1.css";
import { Navigation, Autoplay } from "swiper/modules";
import Img2 from "../../assets/images/IMG-20240816-WA0055.jpg";
import Img3 from "../../assets/images/IMG-20240816-WA0056.jpg";
import Img4 from "../../assets/images/IMG-20240816-WA0057.jpg";
import Img5 from "../../assets/images/IMG-20240816-WA0058.jpg";

const Slider1 = () => {
  return (
    <div className='loop_container'>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={Img2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider1;
