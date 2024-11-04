/* eslint-disable @next/next/no-img-element */
import React from "react";
import FoodCard from "../components/RecipesCard";
import GreenBG from "../../public/assets/image/green-bg.png";
import FoodItem from "../../public/assets/image/food-plate.png";
import Image from "next/image";
import BurgerImg from "../../public/assets/image/burger.png";
import FishImg from "../../public/assets/image/fish.png";
import HoneyImg from "../../public/assets/image/Honey syrup.png";
import SaladImg from "../../public/assets/image/salad.png";
import MeatBall from "../../public/assets/image/meatballs.png";
import PanCake from "../../public/assets/image/pancake.png";
import PotChicken from "../../public/assets/image/pot-chicken.png";
import PastaImg from "../../public/assets/image/pasta.png";

const RecipesPage = () => {
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
      id: "07",
      img: ".",
      title: "Fruity Pancake with Orange & Blueberry",
    },
    {
      id: "08",
      img: PanCake.src,
      title: "Fruity Pancake with Orange & Blueberry",
    },
    {
      id: "09",
      img: PotChicken.src,
      title: "The Best Easy One Pot Chicken and Rice",
    },
    {
      id: "09",
      img: PastaImg.src,
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
    },
  ];

  return (
    <section className="h-auto mx-auto max-w-[1280px] mt-[183px]">
      <div>
        <div>
          <h2 className="font-semibold font-Inter text-[48px] leading-[58px] text-center tracking-[-4%]">
            Simple and tasty recipes
          </h2>
          <p className="text-center text-[16px] leading-[28px] font-Inter text-em ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            ea adipisci hic nesciunt labore tenetur perspiciatis nisi voluptates
            reiciendis fugit!
          </p>
        </div>
        <div className="mt-[96px] grid grid-cols-3 gap-[40px]">
          {FoodMenuCard.map((foodmenu, index) =>
            index === 5 ? ( // ষষ্ঠ কার্ডটি চিহ্নিত করার জন্য index === 5 ব্যবহার করুন
              <div
                key={foodmenu.id}
                className="w-full h-[434px] col-span-1 row-span-1"
                style={{
                  backgroundImage: `url(${GreenBG.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-[24px] font-normal leading-[30px] text-center text-white px-[20px] pt-[40px]">
                  {`Don't forget to eat healthy food`}
                </p>
                <Image
                  src={FoodItem.src}
                  alt="Healthy Food Image"
                  width={354}
                  height={336}
                  className="w-[354px] h-[336px] mx-auto"
                />
              </div>
            ) : (
              <FoodCard key={foodmenu.id} foodmenu={foodmenu} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default RecipesPage;
