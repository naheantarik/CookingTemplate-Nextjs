import React from "react";
import CategoriesCard from "../components/CategoriesCard";
import BreakfastImg from "../../public/assets/image/breakfast.png";
import BreakfastShadowImg from "../../public/assets/image/breakfast-shadow.png";
import VeganImg from "../../public/assets/image/vegan.png";
import VeganShadowImg from "../../public/assets/image/vegan-shaddow.png";
import MeatImg from "../../public/assets/image/meat.png";
import MeatShadowImg from "../../public/assets/image/meat-sw.png";
import DessertImg from "../../public/assets/image/dessert.png";
import DessertShadowImg from "../../public/assets/image/dessert-sw.png";
import LunchImg from "../../public/assets/image/lunch.png";
import LunchShadowImg from "../../public/assets/image/lunch-sw.png";
import ChocolateImg from "../../public/assets/image/chocolate.png";
import ChocolateShadowImg from "../../public/assets/image/chocolate-sw.png";

const Categories = () => {
  const categoriesData = [
    {
      id: "01",
      title: "breakfast",
      img: BreakfastImg.src,
      shadowImg: BreakfastShadowImg.src,
      bgColor: "#ddd",
    },
    {
      id: "02",
      title: "vegan",
      img: VeganImg.src,
      shadowImg: VeganShadowImg.src,
      bgColor: "#ddd",
    },
    {
      id: "03",
      title: "meat",
      img: MeatImg.src,
      shadowImg: MeatShadowImg.src,
      bgColor: "#ddd",
    },
    {
      id: "04",
      title: "dessert",
      img: DessertImg.src,
      shadowImg: DessertShadowImg.src,
      bgColor: "#ddd",
    },
    {
      id: "05",
      title: "lunch",
      img: LunchImg.src,
      shadowImg: LunchShadowImg.src,
      bgColor: "#ddd",
    },
    {
      id: "06",
      title: "chocolate",
      img: ChocolateImg.src,
      shadowImg: ChocolateShadowImg.src,
      bgColor: "#ddd",
    },
  ];
  return (
    <section className="h-auto mx-auto max-w-[1280px] px-4 py-8 mt-[160px]">
      <div>
        {/* title and button section */}

        <div className="flex justify-between items-center">
          <h2 className="font-Inter text-[48px] leading-[58px] font-semibold">
            Categories
          </h2>
          <a
            className="w-[200px] h-[60px] bg-[#E7FAFE] text-black rounded-[16px] flex items-center justify-center font-medium hover:bg-[#D6F3FD] transition-colors duration-200"
            href="#"
          >
            View All Categories
          </a>
        </div>

        {/* End title and button Section */}

        {/* categories card  */}

        <div className="mt-[80px] flex gap-[40px]">
          {categoriesData.map((category) => {
            return <CategoriesCard key={category.id} category={category} />;
          })}
        </div>

        {/* End categories Card */}
      </div>
    </section>
  );
};

export default Categories;
