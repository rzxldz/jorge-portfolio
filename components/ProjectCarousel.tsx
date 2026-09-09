"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ProjectCarousel({
  images,
  alt,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStart = useRef<number | null>(null);

  const previous = () => {
    setIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };

  const next = () => {
    setIndex((current) =>
      current === images.length - 1
        ? 0
        : current + 1
    );
  };

  useEffect(() => {
    if (paused || images.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((current) =>
        current === images.length - 1
          ? 0
          : current + 1
      );
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [paused, images.length]);

  const handleTouchStart = (
    event: React.TouchEvent
  ) => {
    touchStart.current =
      event.touches[0].clientX;
  };

  const handleTouchEnd = (
    event: React.TouchEvent
  ) => {
    if (touchStart.current === null) {
      return;
    }

    const difference =
      touchStart.current -
      event.changedTouches[0].clientX;

    if (Math.abs(difference) > 45) {
      if (difference > 0) {
        next();
      } else {
        previous();
      }
    }

    touchStart.current = null;
  };

  return (
    <div
      className="project-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-image-wrapper">
        <img
          key={images[index]}
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          className="carousel-image"
        />

        <div className="carousel-gradient" />

        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          onClick={previous}
          aria-label="Imagen anterior"
        >
          ←
        </button>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          onClick={next}
          aria-label="Imagen siguiente"
        >
          →
        </button>

        <div className="carousel-counter">
          <strong>
            {String(index + 1).padStart(2, "0")}
          </strong>

          <span>/</span>

          <span>
            {String(images.length).padStart(
              2,
              "0"
            )}
          </span>
        </div>

        <div className="carousel-dots">
          {images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              className={
                dotIndex === index
                  ? "active"
                  : ""
              }
              onClick={() =>
                setIndex(dotIndex)
              }
              aria-label={`Ver imagen ${
                dotIndex + 1
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}