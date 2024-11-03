/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Burger from '../../../public/assets/image/burger.png'
import IconCard from '../IconCard';

const FoodCard = () => {

const IconBox = [
  {
    id: '01',
    img: '....',
    title: '30 Minutes'
  },
  {
    id: '02',
    img: '....',
    title: 'Snaks'
  }
]
  return (
    <div className="w-[400px] h-4[434px] rounded-[30px]  bg-[#F1F8F6]">
      {/* Image Section */}
      <div className="relative p-4 pb-0">
        <img
          src={Burger.src}
          alt="Wagyu Beef Cheeseburger"
          className="w-full h-[250px] object-cover rounded-[16px]"
        />
        {/* Heart Icon */}
        <div className="absolute top-4 right-4 w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-red-500 text-xl">❤️</span>
        </div>
      </div>

      {/* Text Section */}
      <div className="p-6">
        <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-4%] text-black">
          Big and Juicy Wagyu Beef Cheeseburger
        </h3>
        {/* Icon */}
        <div className="flex items-center text-black text-opacity-[60%] mt-2 space-x-4">
          {
           IconBox.map((iconData) => {
            return (
              <IconCard key={iconData.id} iconData={iconData} />
            )
           })
          }

        </div>
        {/* End Icon */}
      </div>
    </div>
  );
};

export default FoodCard;
