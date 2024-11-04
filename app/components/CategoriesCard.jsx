/* eslint-disable @next/next/no-img-element */
import React from "react";

const CategoriesCard = ({ category }) => {
  return (
    <div className="w-[180px] h-[152px] rounded-[30px] bg-[#F1F8F6] flex flex-col items-center justify-between pb-[30px]">
      {/* Image */}
      <div className="w-[120px] h-[120px] -mt-[30px] relative">
        <img
          src={category.img}
          alt=""
          className="w-[100px] h-[100px] top-0 start-0"
        />
        <img
          src={category.shadowImg}
          alt=""
          className="w-[100px] h-[100px] absolute bottom-0 end-0"
        />
      </div>
      {/* Text */}
      <p className="text-black font-semibold text-[18opx] leading-[22px] mt-auto capitalize">
        {category.title}
      </p>
    </div>
  );
};

export default CategoriesCard;
