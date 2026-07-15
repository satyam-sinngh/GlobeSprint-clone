import React from "react";
import { IoMail } from "react-icons/io5";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
export default function Footer() {
  return (
    <div
      id="contact"
      className=" w-full bg-black lg:px-22 px-5 py-10 flex flex-col justify-center items-center gap-12 "
    >
      <div
        id="top"
        className=" bg-[#046e8f] w-full lg:p-10 p-6 rounded-md flex lg:flex-row flex-col justify-between items-start -mt-[120px] gap-6"
      >
        <div className=" lg:w-[70%] w-full flex flex-col justify-between items-start gap-5">
          <h1 className=" text-3xl font-fakhwang font-semibold lg:w-[60%] w-full text-white text-left ">
            Crafting Unforgatable journey, one adventure at a time.
          </h1>
          <hr className=" lg:w-[10%] w-[20%] border-2 border-orange-600 " />
        </div>
        <div className=" lg:w-[30%] w-full flex flex-col justify-between items-start gap-5 ">
          <h1 className="  text-xl text-white "> Subscribe our Newsletter</h1>
          <div className=" flex lg:flex-row flex-col gap-3 w-full ">
            <input
              type="text"
              placeholder="Enter your email"
              className=" bg-white p-3 rounded-md text-black "
            />
            <button className="  bg-orange-600 text-white rounded-md p-2 cursor-pointer hover:bg-black ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        id="mid"
        className=" w-full text-white flex lg:flex-row flex-col justify-between items-start gap-10 "
      >
        <div id="1" className=" lg:w-[40%] w-full ">
          <h1 className=" text-3xl font-semibold font-fakhwang  ">
            GlobeSprint
          </h1>
          <p className=" mt-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
            soluta!
          </p>
          <div className=" flex flex-col justify-between items-start gap-2 mt-5 ">
            <div className=" flex justify-start items-center gap-2 ">
              <IoMail className=" text-orange-600 text-xl " />
              <p>Hello@gmail.com</p>
            </div>
            <div className=" flex justify-start items-center gap-2 ">
              <FaPhoneAlt className=" text-orange-600 text-xl " />
              <p>+91 6398978270</p>
            </div>
          </div>
        </div>
        <div id="2" className=" lg:w-[20%] w-full ">
          <h1 className=" text-xl font-fakhwang ">Quick Links</h1>
          <ul className=" flex flex-col justify-between items-start gap-3 mt-5  ">
            <li className=" text-gray-300 hover:text-orange-600 cursor-pointer  ">
              Home
            </li>
            <li className=" text-gray-300 hover:text-orange-600 cursor-pointer  ">
              About
            </li>
            <li className=" text-gray-300 hover:text-orange-600 cursor-pointer  ">
              Services
            </li>
            <li className=" text-gray-300 hover:text-orange-600 cursor-pointer  ">
              Features
            </li>
            <li className=" text-gray-300 hover:text-orange-600 cursor-pointer  ">
              Contact
            </li>
          </ul>
        </div>
        <div id="3" className=" lg:w-[20%] w-full ">
          <h1 className=" text-xl font-fakhwang ">Travel Services</h1>
          <ul className=" flex flex-col justify-between items-start gap-3 mt-5  ">
            <li className=" text-gray-300 hover:text-orange-600 cursor-pointer  ">
              Tour Packages
            </li>
            <li className=" text-gray-300 hover:text-orange-600 cursor-pointer  ">
              Flight & Hotel Deals
            </li>
            <li className=" text-gray-300 hover:text-orange-600 cursor-pointer  ">
              Travel Insurance
            </li>
            <li className=" text-gray-300 hover:text-orange-600 cursor-pointer  ">
              Visa Assistance
            </li>
            <li className=" text-gray-300 hover:text-orange-600 cursor-pointer  ">
              Online Booking
            </li>
          </ul>
        </div>
        <div id="4" className=" lg:w-[20%] w-full ">
          <h1 className=" text-xl font-fakhwang ">Follow Us</h1>
          <div className=" flex flex-col justify-between items-start gap-2 mt-5 ">
            <div className=" flex justify-start items-center gap-2 ">
              <FaFacebook className=" text-orange-600 text-xl " />
              <p className=" text-gray-300 hover:text-orange-600 cursor-pointer">
                Facebook
              </p>
            </div>
            <div className=" flex justify-start items-center gap-2 ">
              <FaInstagram className=" text-orange-600 text-xl " />
              <p className=" text-gray-300 hover:text-orange-600 cursor-pointer">
                Instagram
              </p>
            </div>
            <div className=" flex justify-start items-center gap-2 ">
              <FaLinkedin className=" text-orange-600 text-xl " />
              <p className=" text-gray-300 hover:text-orange-600 cursor-pointer">
                Linkedin
              </p>
            </div>
            <div className=" flex justify-start items-center gap-2 ">
              <FaTwitter className=" text-orange-600 text-xl " />
              <p className=" text-gray-300 hover:text-orange-600 cursor-pointer">
                Twitter
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className=" w-full border-1 border-gray-800 " />
      <div
        id="bottom"
      >
        <p className="text-gray-300 text-center flex gap-2 w-full items-center justify-center">
          Copyright <FaRegCopyright /> 2026, GlobeSprint, All Rights Reserve
        </p>
      </div>
    </div>
  );
}
