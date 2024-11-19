import React from "react";
import FoodCard from "./RecipesCard";
import BurgerImg from "../../public/assets/image/burger.png";
import FishImg from "../../public/assets/image/fish.png";
import HoneyImg from "../../public/assets/image/Honey syrup.png";
import SaladImg from "../../public/assets/image/salad.png";
import MeatBall from "../../public/assets/image/meatballs.png";
import PanCake from "../../public/assets/image/pancake.png";
import PotChicken from "../../public/assets/image/pot-chicken.png";
import PastaImg from "../../public/assets/image/pasta.png";

const FoodItem = () => {
  const FoodMenuCard = [
    {
      id: "01",
      img: BurgerImg.src,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
    },
    {
      id: "02",
      img: FishImg.src,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    },
    {
      id: "03",
      img: HoneyImg.src,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
    },
    {
      id: "04",
      img: SaladImg.src,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
    },
    {
      id: "05",
      img: MeatBall.src,
      title: "Chicken Meatballs with Cream Cheese",
    },
    {
      id: "06",
      img: PanCake.src,
      title: "Fruity Pancake with Orange & Blueberry",
    },
    {
      id: "07",
      img: PotChicken.src,
      title: "The Best Easy One Pot Chicken and Rice",
    },
    {
      id: "08",
      img: PastaImg.src,
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
    },
  ];

  return (
    <section className="h-auto mx-auto max-w-[1280px] mt-[160px] ">
      <div>
        <div className="flex gap-[153px]">
          <h2 className="font-Inter font-semibold text-[48px] tracking-[-4%] leading-[58px]">
            Try this delicious recipe to make your day
          </h2>
          <p className="font-inter text-[16px] leading-[28px] text-black text-opacity-[60%]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="mt-[80px] grid grid-cols-3 gap-[40px]">
          {FoodMenuCard.map((foodmenu) => {
            return <FoodCard key={foodmenu.id} foodmenu={foodmenu} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodItem;
