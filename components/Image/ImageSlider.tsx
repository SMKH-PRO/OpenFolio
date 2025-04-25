import { useState, useEffect, useCallback } from "react";

type ImageSliderProps = {
  images: string[];
  autoplay?: boolean;
  navigation?: boolean;
  pagination?: boolean;
};

const ImageSlider = ({
  images,
  autoplay = true,
  navigation = true,
  pagination = true,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Check if there's only one image
  const isSingleImage = images.length <= 1;

  const goToNext = useCallback(() => {
    if (isSingleImage) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length, isSingleImage]);

  const goToPrev = useCallback(() => {
    if (isSingleImage) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length, isSingleImage]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isSingleImage) return;
      setCurrentIndex(index);
    },
    [isSingleImage]
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // Only enable autoplay if there are multiple images
    if (autoplay && !isHovering && !isSingleImage) {
      interval = setInterval(() => {
        goToNext();
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, goToNext, isHovering, isSingleImage]);

  if (!images.length) return null;

  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="overflow-hidden relative w-full h-full">
        <div
          className="transition-transform duration-500 ease-in-out flex w-full h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, i) => (
            <div
              key={`slider_image_${i}`}
              className="min-w-full w-full h-full flex items-center justify-center"
              style={{ flex: "0 0 100%" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={`slider_image_${i}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        {navigation && !isSingleImage && (
          <>
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-1.5 text-gray-800 z-10 rounded-full"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-1.5 text-gray-800 z-10 rounded-full"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}

        {pagination && !isSingleImage && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                type="button"
                key={`dot_${i}`}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full ${
                  i === currentIndex ? "bg-primary-900" : "bg-white"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
