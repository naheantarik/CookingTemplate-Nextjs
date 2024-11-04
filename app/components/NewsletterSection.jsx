import React from "react";
import RightImg from "../../public/assets/image/kisspng-salad.png";
import LeftImg from "../../public/assets/image/egg.png";

const NewsletterSection = () => {
  return (
    <section className="flex items-center justify-center bg-[#E7F9FD] rounded-[60px] mx-auto max-w-[1280px] h-[442px] px-8 mt-[160px] relative">
      <div className="flex flex-col items-center text-center w-full max-w-[800px] ">
        <h2 className="font-bold text-[36px] leading-[44px] text-black mb-4">
          Deliciousness to your inbox
        </h2>
        <p className="text-[16px] leading-[24px] text-black text-opacity-60 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
          minim
        </p>
        <div className="flex items-center gap-4 w-full max-w-[500px]">
          <input
            type="email"
            placeholder="Your email address..."
            className="flex-1 py-3 px-4 rounded-full text-[16px] border border-gray-300 focus:outline-none"
          />
          <button className="bg-black text-white py-3 px-6 rounded-full font-semibold">
            Subscribe
          </button>
        </div>
      </div>
      {/* Add decorative elements */}
      <div className="absolute bottom-0 right-0">
        <img
          src={LeftImg.src}
          alt="Salad"
          className="w-[200px] object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0">
        <img
          src={RightImg.src}
          alt="Egg"
          className="w-[200px] object-contain"
        />
      </div>
    </section>
  );
};

export default NewsletterSection;
