import React, {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx';

const ImageSlider = () => {
    const slides = [
        {
            url: 'https://github.com/riverSun1/react-tailwind-web/assets/67379144/1541d3a6-a38d-45e0-aa61-9e34a2a032c8',
            title: 'strawberries',
        },
        {
            url: 'https://github.com/riverSun1/react-tailwind-web/assets/67379144/7cd00e74-a5cf-4ae5-a428-c7a4a0287fa1',
            title: 'oranges',
        },
        {
            url: 'https://github.com/riverSun1/react-tailwind-web/assets/67379144/7e1f2c48-9c11-4e45-bc1c-bee45e4ec259',
            title: 'bananas',
        },
        {
            url: 'https://github.com/riverSun1/react-tailwind-web/assets/67379144/2e07db59-9c63-4dff-992d-bd1c98fe1396',
            title: 'greengrapes',
        },
        {
            url: 'https://github.com/riverSun1/react-tailwind-web/assets/67379144/917b00e6-08d4-468c-8493-5de6cf646116',
            title: 'blueberries',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;