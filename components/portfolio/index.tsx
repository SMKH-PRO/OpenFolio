import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import Image from "next/image";
import Container from "../container";

const Portfolio = () => (
  <div className="bg-primary-100  bg-opacity-[0.15] mt-32 relative">
    <span className="absolute top-0 left-0 drop-shadow-[0_0_2px_black]">
      <Image
        src="/assets/images/shapes/dotted-design.png"
        width={300}
        height={300}
      />
    </span>
    <Container className="py-32">
      <h4 className="text-primary-900 font-bold text-2xl text-center">
        MY PORTFOLIO
      </h4>

      <Swiper
        // install Swiper modules
        color="#ffff"
        className="swiper-button-black"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  </div>
);

export default Portfolio;
