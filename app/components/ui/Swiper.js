"use client";
// Import Swiper React components
import { Swiper as SwiperJs, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import Image from "next/image";
import { useCallback, useRef } from "react";
import Link from "next/link";

function Swiper({ images = [] }) {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Link
      target="_blank"
      href={"https://www.linkedin.com/in/yasin-rofcanin-19a05956"}
      className="w-full lg:w-2/5 aspect-square relative"
    >
      <SwiperJs
        modules={[Autoplay]}
        loop
        ref={sliderRef}
        slidesPerView={1}
        autoplay
        className="w-full h-full"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              className="w-full h-full object-cover border border-black"
              src={item}
              width={500}
              height={500}
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </SwiperJs>
      {/* <div className="z-10 absolute left-0 top-1/2 -translate-y-1/2 flex justify-between items-center w-full px-3">
        <Icon
          onClick={handlePrev}
          className="w-7 h-7 text-[#e5e7eb] cursor-pointer"
          icon="fa6-solid:chevron-left"
        />
        <Icon
          onClick={handleNext}
          className="w-7 h-7 text-[#e5e7eb] cursor-pointer"
          icon="fa6-solid:chevron-right"
        />
      </div> */}
    </Link>
  );
}

export default Swiper;
