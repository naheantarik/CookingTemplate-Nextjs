import React from 'react';
import CategoriesCard from '../components/Categories/categoriesCardComponent';
import BreakfastImg from '../../public/assets/image/breakfast.png'
import BreakfastShadowImg from '../../public/assets/image/breakfast-shadow.png'


const Categories = () => {

    const categoriesData = [
        {
            id: '01',
            title: 'breakfast',
            img: BreakfastImg.src,
            shadowImg: BreakfastShadowImg.src ,
            bgColor: '#ddd'
        },
        {
            id: '02',
            title: 'vegan',
            img: '....',
            shadowImg: '...',
            bgColor: '#ddd'
        },
        {
            id: '03',
            title: 'meat',
            img: '....',
            shadowImg: '...',
            bgColor: '#ddd'
        },
        {
            id: '04',
            title: 'dessert',
            img: '....',
            shadowImg: '...',
            bgColor: '#ddd'
        },
        {
            id: '05',
            title: 'lunch',
            img: '....',
            shadowImg: '...',
            bgColor: '#ddd'
        },
        {
            id: '06',
            title: 'chocolate',
            img: '....',
            shadowImg: '...',
            bgColor: '#ddd'
        }

    ]
  return (
    <section className="h-auto mx-auto max-w-[1280px] px-4 py-8">
      <div>

        {/* title and button section */}

        <div className="flex justify-between items-center">
          <h2 className="font-Inter text-[48px] leading-[58px] font-semibold">Categories</h2>
          <a
            className="w-[200px] h-[60px] bg-[#E7FAFE] text-black rounded-[16px] flex items-center justify-center font-medium hover:bg-[#D6F3FD] transition-colors duration-200"
            href="#"
          >
            View All Categories
          </a>
        </div>

        {/* End title and button Section */}

        {/* categories card  */}

        <div className='mt-[80px] flex gap-[40px]'>
            {
                categoriesData.map((category) => {
                    return (
                        <CategoriesCard key={category.id} category={category} />
                    )
                })
            }
        </div>

        {/* End categories Card */}
      </div>
    </section>
  );
};

export default Categories;
