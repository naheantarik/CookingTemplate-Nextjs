/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Burger from '../../../public/assets/image/burger.png'

const FoodCard = () => {
  return (
    <div className="w-[400px] h-4[434px] rounded-[30px]  bg-[#F1F8F6] px-[16px] ">
      {/* Image Section */}
      <div className="relative">
        <img
          src={Burger.src}
          alt="Wagyu Beef Cheeseburger"
          className="w-full h-[250px] object-cover rounded-[16px]"
        />
        {/* Heart Icon */}
        <div className="absolute top-4 right-4 w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-red-500 text-xl">❤️</span> {/* অথবা একটি আইকন ব্যবহার করতে পারেন */}
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-4">
        <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-4%] text-black p-[24px]">
          Big and Juicy Wagyu Beef Cheeseburger
        </h3>
        <div className="flex items-center text-gray-500 mt-2 space-x-4">
          {/* Time Icon and Text */}
          <div className="flex items-center space-x-[24px]"> 
            <div className="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75 1.5H14.25C14.4489 1.5 14.6397 1.42098 14.7803 1.28033C14.921 1.13968 15 0.948912 15 0.75C15 0.551088 14.921 0.360322 14.7803 0.21967C14.6397 0.0790176 14.4489 0 14.25 0L9.75 0C9.55109 0 9.36032 0.0790176 9.21967 0.21967C9.07902 0.360322 9 0.551088 9 0.75C9 0.948912 9.07902 1.13968 9.21967 1.28033C9.36032 1.42098 9.55109 1.5 9.75 1.5Z" fill="black"/>
                <path d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9973 9.61388 20.0482 7.32626 18.361 5.63902C16.6737 3.95178 14.3861 3.0027 12 3ZM16.2426 8.81799L12.5304 12.5303C12.4607 12.6 12.378 12.6552 12.2871 12.6929C12.1961 12.7306 12.0985 12.75 12 12.75C11.9015 12.75 11.804 12.7306 11.713 12.6929C11.622 12.6553 11.5393 12.6 11.4697 12.5304C11.4 12.4607 11.3448 12.378 11.3071 12.2871C11.2694 12.1961 11.25 12.0985 11.25 12C11.25 11.9015 11.2694 11.804 11.3071 11.713C11.3448 11.622 11.4 11.5393 11.4696 11.4697L15.182 7.75736C15.2516 7.68771 15.3343 7.63246 15.4253 7.59477C15.5163 7.55708 15.6138 7.53767 15.7123 7.53767C15.8108 7.53767 15.9083 7.55707 15.9993 7.59476C16.0903 7.63244 16.173 7.68769 16.2426 7.75733C16.3123 7.82697 16.3675 7.90965 16.4052 8.00065C16.4429 8.09164 16.4623 8.18916 16.4623 8.28766C16.4623 8.38615 16.4429 8.48368 16.4052 8.57467C16.3675 8.66567 16.3123 8.74835 16.2427 8.81799H16.2426Z" fill="black"/>
                </svg>

              <p className='pl-[10px]'> 30 Minutes </p>
            </div>
          {/* Food Type Icon and Text */}
          <div className="flex items-center space-x-1">
            <span className="text-sm">🍴</span>
            <span className="text-sm">Snack</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
