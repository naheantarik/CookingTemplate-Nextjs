/* eslint-disable @next/next/no-img-element */
import React from "react";
import ChefOne from "../../public/assets/image/Chef-1.png";

const HomeCTA = () => {
  return (
    <section className="h-auto mx-auto max-w-[1280px] px-4 py-8 mt-[143px]">
      <div className="flex flex-col md:flex-row text-start gap-[44px] items-center justify-between">
        <div className="max-w-[526px]">
          <h2 className="text-[48px] text-black font-semibold tracking-[-4%] leading-[58px] font-inter">
            Everyone can be a <br /> chef in their own kitchen
          </h2>
          <p className="font-normal font-inter text-[16px] leading-[28px] text-black text-opacity-[60%] mt-[24px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>

          <a
            className="bg-black w-[180px] h-[60px] text-white flex items-center justify-center rounded-[16px] mt-[72px]"
            href="#"
          >
            Learn More
          </a>
        </div>
        <div className="flex-grow">
          <img
            className="w-full object-cover"
            src={ChefOne.src}
            alt="ChafImage"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
