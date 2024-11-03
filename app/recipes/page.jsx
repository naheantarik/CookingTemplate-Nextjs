import React from 'react';
import FoodCard from '../components/recipesCard/recipesCard';

const RecipesPage = () => {
  return (
    <section className='h-auto mx-auto max-w-[1280px] mt-[183px]'>
        <div>
            <div>
                <h2 className='font-semibold font-Inter text-[48px] leading-[58px] text-center tracking-[-4%]'>Simple and tasty recipes</h2>
                <p className='text-center text-[16px] leading-[28px] font-Inter '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ea adipisci hic nesciunt labore tenetur perspiciatis nisi voluptates reiciendis fugit!</p>
            </div>
            <div className='mt-[96px] grid grid-cols-3 gap-[40px]'>
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
            </div>
        </div>
    </section>

  );
};

export default RecipesPage;