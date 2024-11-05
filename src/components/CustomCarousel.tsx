import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export interface CustomCarouselProps {
  imageUrls: string[];
}

function CustomCarousel(props: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (currentIndex < props.imageUrls.length - 1) {
      setCurrentIndex((_currentIndex) => _currentIndex + 1);
    }
  };

  const prev = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex((_currentIndex) => _currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-row items-center w-full h-full">
      <div
        className="w-10 h-32 rounded-full flex items-center justify-center bg-gray-900 hover:bg-gray-600 cursor-pointer"
        onClick={prev}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </div>
      <div className="flex-1 px-5">
        {props.imageUrls.map((imageUrl: string, index: number) => (
          <div className="flex w-full h-full items-center justify-center content-center">
            <img
              alt=""
              className={currentIndex === index ? 'block' : 'hidden'}
              key={index}
              src={imageUrl}
              style={{
                maxWidth: 'calc(100vw - 150px)',
                maxHeight: 'calc(100vh - 150px)',
              }}
            />
          </div>
        ))}
        <div className="flex flex-1 justify-center mt-4 gap-2">
          {props.imageUrls.map((_, index: number) => (
            <div
              className={`dot cursor-pointer ${index === currentIndex ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
            ></div>
          ))}
        </div>
      </div>
      <div
        className="w-10 h-32 rounded-full flex items-center justify-center bg-gray-900 hover:bg-gray-600 cursor-pointer"
        onClick={next}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </div>
    </div>
  );
}
export default CustomCarousel;
