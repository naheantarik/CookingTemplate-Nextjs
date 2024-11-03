import React from 'react';

const IconCard = ({ iconData }) => {
  return (

    <div className="flex items-center space-x-[24px]"> 
          <div className="flex items-center space-x-1">
              {iconData.img}
              <p className="text-[14px] leading-[17px] tracking-[-2%]">{iconData.title}</p>
          </div>
    </div>


  );
};

export default IconCard;