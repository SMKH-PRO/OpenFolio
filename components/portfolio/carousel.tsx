import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import styles from "../../styles/portfolio.module.css";
import IconButton from "../buttons/iconButton";

const Carousel = () => (
  <div className="my-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
    <Swiper
      // install Swiper modules
      autoplay={{
        delay: 1000,
        waitForTransition: true,
        pauseOnMouseEnter: true,
        stopOnLastSlide: false,
      }}
      color="#ffff"
      className="swiper-button-black"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      loop
      pagination={{
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className} bg-white shadow-md text-primary-900 text-[10px]">${
            index + 1
          }</span>`;
        },
      }}
      breakpoints={{
        1: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {new Array(6).fill(5).map((a, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={`portfolio ${i}`}>
          <div
            style={{
              backgroundImage: `url('/assets/images/portfolio/portfolio-${
                i + 1
              }.jpg')`,
            }}
            className={`
            ${styles.overlay}
        
          mt-2
          tranition-all
          duration-300
          ease-out
          hover:mt-0
          bg-white
          min-h-[330px]
          rounded-lg
          group
          bg-no-repeat
          bg-cover
          `}
          >
            <div className="absolute z-10 bottom-[15px] hidden group-hover:flex w-full  p-5 justify-between">
              <div>
                <h4 className="text-white drop-shadow-md	 font-bold">
                  Mobile UI Design
                </h4>
                <p className="text-white">Dolar repellendus temporibus...</p>
              </div>
              <span>
                <IconButton
                  colorClass="
                     bg-white
                     hover:bg-primary-500
                  "
                  customIconClass="text-slate-700 hover:text-white"
                  fontAwesome="arrow-right"
                  fontAwesomeType="fas"
                />
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Carousel;
