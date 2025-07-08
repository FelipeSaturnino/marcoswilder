import React, { useState, useRef } from "react";
import styles from "./GalleryCarousel.module.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import ModalPortal from "./ModalPortal";

const images = [
  "/foto1.jpg",
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg",
  "/foto5.jpg",
  "/foto6.jpg",
];

export default function GalleryCarousel() {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setFullscreenIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  };

  const prevImage = () => {
    setFullscreenIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div style={{ width: "100%", overflow: "hidden", position: "relative" }} className={styles.carouselContainerWrapper}>
        <div className={styles.carouselContainer}>
          <button
            className={styles.arrowLeft}
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollLeft -= 420;
              }
            }}
          >
            <FaChevronLeft />
          </button>

          <div className={styles.visibleImagesContainer} ref={scrollRef}>
            {images.map((src, index) => (
              <div
                key={index}
                className={styles.imageBox}
                onClick={() => setFullscreenIndex(index)}
              >
                <img src={src} alt={`Foto ${index + 1}`} />
              </div>
            ))}
          </div>

          <button
            className={styles.arrowRight}
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollLeft += 420;
              }
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {fullscreenIndex !== null && (
        <ModalPortal>
          <div className={styles.fullscreenOverlay}>
            <button
              className={styles.closeButton}
              onClick={() => setFullscreenIndex(null)}
            >
              <FaTimes />
            </button>
            <button
              className={styles.arrowLeftFullscreen}
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>
            <img
              src={images[fullscreenIndex]}
              alt={`Fullscreen Foto ${fullscreenIndex + 1}`}
              className={styles.fullscreenImage}
            />
            <button
              className={styles.arrowRightFullscreen}
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
          </div>
        </ModalPortal>
      )}
    </>
  );
}
