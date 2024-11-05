/* eslint-disable @next/next/no-img-element */
import React from "react";
import InstaPost1 from "../../public/assets/image/Insta-1.png";
import InstaPost2 from "../../public/assets/image/insta-2.png";
import InstaPost3 from "../../public/assets/image/insta-3.png";
import InstaPost4 from "../../public/assets/image/insta-4.png";

const InstagramFeed = () => {
  return (
    <section className=" bg-gradient-to-b from-[rgba(231,249,253,0)] to-[#E7F9FD]">
      <div className="text-center h-auto mx-auto max-w-[1280px] mt-[160px] py-[80px]">
        <div className="max-w-[840px] mx-auto">
          <h2 className="text-[47px] font-Inter font-semibold tracking-[-4%] leading-[58px]">
            Check out @foodieland on Instagram
          </h2>
          <p className="w-full text-[16px] font-inter text-black text-opacity-[60%] leading-[28px]  mt-[24px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="flex justify-center gap-[40px] mt-[80px]">
          <img src={InstaPost1.src} alt="InstaPost" />
          <img src={InstaPost2.src} alt="InstaPost" />
          <img src={InstaPost3.src} alt="InstaPost" />
          <img src={InstaPost4.src} alt="InstaPost" />
        </div>
        <div className="mb-[80px]">
          <a
            className="w-[229px] h-[60px] font-inter mt-[80px] inline-flex gap-[17px] items-center justify-center bg-black text-white rounded-[16px]"
            href="#"
          >
            Visit Our Instagram
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.83667 0H16.0867C19.883 0 22.9617 3.07862 22.9617 6.875V15.125C22.9617 18.9214 19.883 22 16.0867 22H7.83667C4.04029 22 0.96167 18.9214 0.96167 15.125V6.875C0.96167 3.07862 4.04029 0 7.83667 0ZM16.0867 19.9375C18.7404 19.9375 20.8992 17.7787 20.8992 15.125V6.875C20.8992 4.22125 18.7404 2.0625 16.0867 2.0625H7.83667C5.18292 2.0625 3.02417 4.22125 3.02417 6.875V15.125C3.02417 17.7787 5.18292 19.9375 7.83667 19.9375H16.0867Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.46167 11C6.46167 7.96263 8.92429 5.5 11.9617 5.5C14.999 5.5 17.4617 7.96263 17.4617 11C17.4617 14.0374 14.999 16.5 11.9617 16.5C8.92429 16.5 6.46167 14.0374 6.46167 11ZM8.52417 11C8.52417 12.8948 10.0669 14.4375 11.9617 14.4375C13.8564 14.4375 15.3992 12.8948 15.3992 11C15.3992 9.10388 13.8564 7.5625 11.9617 7.5625C10.0669 7.5625 8.52417 9.10388 8.52417 11Z"
                fill="white"
              />
              <circle cx="17.8741" cy="5.08761" r="0.732875" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
