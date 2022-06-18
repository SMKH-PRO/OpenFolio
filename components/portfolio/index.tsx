import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import Image from "next/image";
import Container from "../container";
import styles from "../../styles/portfolio.module.css";
import IconButton from "../buttons/iconButton";
import Shapes from "../shapes";

const Portfolio = () => (
  <div className="bg-primary-100  bg-opacity-[0.15] mt-32 relative">
    <Shapes noLine />
    <span className="absolute top-0 left-0 drop-shadow-[0_0_2px_black]">
      <Image
        src="/assets/images/shapes/dotted-design.png"
        width={300}
        height={300}
      />
    </span>
    <span className="absolute bottom-0 rotate-[180deg] right-0 drop-shadow-[0_0_2px_black]">
      <Image
        src="/assets/images/shapes/dotted-design.png"
        width={300}
        height={300}
      />
    </span>
    <Container className="py-32">
      <h4 className="text-primary-900 font-bold text-4xl text-center">
        RECENT PROJECTS
      </h4>
      <div className="my-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
        <Swiper
          // install Swiper modules

          color="#ffff"
          className="swiper-button-black"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
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
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
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
                    <p className="text-white">
                      Dolar repellendus temporibus...
                    </p>
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
    </Container>
  </div>
);

export default Portfolio;
