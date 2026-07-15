import React, { useEffect } from "react";
import aboutimg1 from "../assets/about1.webp";
import aboutimg2 from "../assets/about2.webp";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <div
      id="about"
      className=" w-full flex lg:flex-row flex-col justify-between items-center gap-12 lg:px-15 lg:py-15 px-5 p-20"
    >
      <div className="flex flex-col justify-center items-start">
        <img
          src={aboutimg1}
          data-aos="zoom-in"
          data-aos-delay="100"
          className="rounded-md"
        />
        <img
          src={aboutimg2}
          data-aos="zoom-in"
          data-aos-delay="200"
          className="w-[40%] border-10 rounded-md border-white -mt-[120px] -ml-[30px] -rotate-2"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className="text-md text-gray-600 "
        >
          About Us
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="lg:text-5xl text-3xl font-fakhwang font-semibold text-black"
        >
          Embark on a hilarious journy with our travel expert
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="500"
          className="text-gray-700 font-semibold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellat
          aspernatur nulla voluptatum voluptates dolorem.
        </p>
        <p
          data-aos="zoom-in"
          data-aos-delay="500"
          className="text-gray-500 font-semibold"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          vel aut delectus ad commodi debitis possimus necessitatibus odit ullam
          blanditiis!
        </p>
        <hr className="w-full border-t border-gray-300" />

        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          id="iconbox"
          className="w-full grid lg:grid-cols-2 grid-cols-1 justify-between items-center lg:gap-5 gap-10"
        >
          <div
            id="left"
            className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4"
          >
            <div
              id="icon"
              className="w-[20%] flex justify-center items-center bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md"
            >
              <FaGlobeAmericas className="text-3xl lg:text-xl text-white" />
            </div>
            <div className="w-[80%] flex flex-col justify-center items-start gap-1 ">
              <h1 className="text-black text-xl font-medium">
                Best Destination
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
          <div
            id="right"
            className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4"
          >
            <div
              id="icon"
              className="w-[20%] flex justify-center items-center bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md"
            >
              <IoIosPricetag className="text-3xl lg:text-xl text-white" />
            </div>
            <div className="w-[80%] flex flex-col justify-center items-start gap-1 ">
              <h1 className="text-black text-xl font-medium">
                Affordable Price
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
