import React, { useEffect } from 'react'
import cta1 from '../assets/cta1.webp';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlay } from "react-icons/fa";

export default function CtaOne() {
  useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      });
    }, []);
  return (
    <div
      id="cta1"
      className=" relative w-full lg:h-[500px] h-auto lg:p-22 p-10 flex flex-col justify-center gap-5   bg-cover bg-center"
      style={{ backgroundImage: `url(${cta1})` }}
    >
      {/*Black overlay */}
      <div className=" absolute inset-0 bg-black/50"></div>
      {/*Content part */}
      <div className=" relative z-10 flex flex-col justify-center items-center gap-5 ">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className=" text-white text-3xl lg:text-5xl font-fakhwang font-semibold lg:w-[60%] w-full text-center capitalize "
        >
          Lorem ipsum dolor sit amet.
        </h1>

        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className=" text-white text-center lg:w-[50%] w-full text-lg "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam
          veritatis quidem voluptates quas cumque nobis quia minus officia
          eaque!
        </p>
        <div data-aos="zoom-in" data-aos-delay="300" className=' bg-white lg:p-7 p-4  rounded-full cursor-pointer hover:bg-black'> <FaPlay className=' text-orange-600 text-2xl '/></div>
      </div>
    </div>
  );
}
