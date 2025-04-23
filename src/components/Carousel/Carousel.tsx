import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  imageUrls: string[];
  className?: string;
}

function Carousel({ imageUrls, className }: CarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImg() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImg() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div
      className={
        className + " relative flex items-center mx-auto my-auto bg-black"
      }
    >
      <img
        src={imageUrls[imageIndex]}
        className="max-w-full h-full object-contain mx-auto my-auto bg-black"
      />
      <button
        onClick={showPrevImg}
        className="block absolute top-0 bottom-0 p-1 cursor-pointer left-0 hover:bg-gray-700/20"
      >
        <FaChevronLeft size={40} className="text-white" />
      </button>
      <button
        onClick={showNextImg}
        className="block absolute top-0 bottom-0 p-1 cursor-pointer right-0 hover:bg-gray-700/20"
      >
        <FaChevronRight size={40} className="text-white" />
      </button>
    </div>
  );
}

export default Carousel;
