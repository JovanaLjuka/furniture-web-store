import { useState } from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import { RxDot } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import img1 from '../../src/assets/Images/hero1.jpg';
import img2 from '../../src/assets/Images/hero2.jpg';
import img3 from '../../src/assets/Images/hero3.jpg';
import img4 from '../../src/assets/Images/hero4.jpg';
import img5 from '../../src/assets/Images/hero5.jpg';
import img6 from '../../src/assets/Images/hero6.jpg';

const Slider = () => {
  const sliderImages = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = index => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-[1200px] h-[550px]  m-auto py-5 px-4 relative group">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative flex items-center justify-center">
        <img src={sliderImages[currentIndex]} alt="slider" className="w-full h-full"></img>
        <Link
          to="products"
          className="btn btn-outline  w-[300px] h-[10px] m-auto absolute left-0 right-0 top-0 bottom-0 border hover:border-2 cursor-pointer "
        >
          Discover more
        </Link>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-brown-800 cursor-pointer">
        <HiOutlineChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-brown-800 cursor-pointer">
        <HiOutlineChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliderImages.map((image, index) => {
          return (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className="text-2xl cursor-pointer text-brown-800"
            >
              <RxDot />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
