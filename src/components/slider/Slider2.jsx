import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider2.css";
import { Navigation, Autoplay } from "swiper/modules";
import Img2 from "../../assets/images/IMG-20240816-WA0055.jpg";
import Img3 from "../../assets/images/IMG-20240816-WA0056.jpg";
import Img4 from "../../assets/images/IMG-20240816-WA0057.jpg";
import Img5 from "../../assets/images/IMG-20240816-WA0058.jpg";

const Slider2 = () => {
  return (
    <div className='gallery_container' id='gallery'>
      <section className='title'>
        <h1>Gallery</h1>
        <div className='outlinetinz'>Gallery</div>
      </section>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 6500,
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
          <div className='text_box'>Rear View</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt='' />
          <div className='text_box'>Rear View</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt='' />
          <div className='text_box'>Rear View</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt='' />
          <div className='text_box'>Rear View</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt='' />
          <div className='text_box'>Rear View</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt='' />
          <div className='text_box'>Rear View</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt='' />
          <div className='text_box'>Rear View</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt='' />
          <div className='text_box'>Rear View</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider2;
