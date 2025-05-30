import React, {  useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import CardBgImg from '../assets/White and Blue.png';
import { FaStar } from 'react-icons/fa';

interface Review {
  text: string;
  name: string;
  title: string;
}

interface Props {
  reviews: Review[];
}

// function useIsMobile() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   return isMobile;
// }

const TestimonialsCarousel: React.FC<Props> = ({ reviews }) => {
  const cardsRef = useRef<Array<HTMLLIElement | null>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);

  const handleMouseEnter = () => setHoverCount((c) => c + 1);
  const handleMouseLeave = () => setHoverCount((c) => Math.max(0, c - 1));
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsPaused(hoverCount > 0);
  }, [hoverCount]);

  const baseCardWidth = 224; // 14rem * 16px
  const gap = 20; // horizontal gap between cards

  // Calculate total horizontal space a card takes based on its scale and gap
  // We'll use this to prevent overlap by spacing cards properly.
  const getCardSpacing = (scale: number) => baseCardWidth * scale + gap;

  // Helper to get relative position (with wrap-around)
  const getRelativeIndex = (i: number, current: number, length: number) => {
    const half = Math.floor(length / 2);
    let diff = i - current;
    if (diff > half) diff -= length;
    if (diff < -half) diff += length;
    return diff;
  };

  useEffect(() => {
    if (isPaused || isMobile) return; // ⛔ stop auto-scroll on mobile

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, reviews.length, isMobile]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const relativePos = getRelativeIndex(i, currentIndex, reviews.length);

      let scale = 0;
      let opacity = 0;
      let zIndex = 0;
      let x = 0;

      if (relativePos === 0) {
        scale = 1;
        opacity = 1;
        zIndex = 10;
        x = 0;
        card.onmouseenter = handleMouseEnter;
        card.onmouseleave = handleMouseLeave;
      } else if (relativePos === -1) {
        scale = 0.85;
        opacity = 0.8;
        zIndex = 9;
        x = -(getCardSpacing(1) / 2 + getCardSpacing(scale) / 2);
      } else if (relativePos === 1) {
        scale = 0.85;
        opacity = 0.8;
        zIndex = 9;
        x = getCardSpacing(1) / 2 + getCardSpacing(scale) / 2;
      } else if (relativePos === -2) {
        scale = 0.7;
        opacity = 0.6;
        zIndex = 7;
        x = -(
          getCardSpacing(1) / 2 +
          getCardSpacing(0.85) +
          getCardSpacing(scale) / 2 +
          15
        );
      } else if (relativePos === 2) {
        scale = 0.7;
        opacity = 0.6;
        zIndex = 7;
        x =
          getCardSpacing(1) / 2 +
          getCardSpacing(0.85) +
          getCardSpacing(scale) / 2 +
          15;
      } else if (relativePos === -3) {
        scale = 0.55;
        opacity = 0.4;
        zIndex = 5;
        x = -(
          getCardSpacing(1) / 2 +
          getCardSpacing(0.85) +
          getCardSpacing(0.7) +
          getCardSpacing(scale) / 2 +
          25
        );
      } else if (relativePos === 3) {
        scale = 0.55;
        opacity = 0.4;
        zIndex = 5;
        x =
          getCardSpacing(1) / 2 +
          getCardSpacing(0.85) +
          getCardSpacing(0.7) +
          getCardSpacing(scale) / 2 +
          25;
      } else if (relativePos === -4) {
        scale = 0.4;
        opacity = 0;
        zIndex = 3;
        x = -(
          getCardSpacing(1) / 2 +
          getCardSpacing(0.85) +
          getCardSpacing(0.7) +
          getCardSpacing(0.55) +
          getCardSpacing(scale) / 2 +
          35
        );
      } else if (relativePos === 4) {
        scale = 0.4;
        opacity = 0;
        zIndex = 3;
        x =
          getCardSpacing(1) / 2 +
          getCardSpacing(0.85) +
          getCardSpacing(0.7) +
          getCardSpacing(0.55) +
          getCardSpacing(scale) / 2 +
          35;
      } else {
        scale = 0.3;
        opacity = 0;
        zIndex = 0;
        x = 0;
        card.onmouseenter = null;
        card.onmouseleave = null;
      }

      gsap.to(card, {
        x,
        scale,
        opacity,
        zIndex,
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  }, [currentIndex, reviews.length]);



const moveCarousel = (direction: 'left' | 'right') => {
  let newIndex = currentIndex;

  if (direction === 'right') {
    // Move active card to the left (show card on left side)
    newIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
  } else {
    // Move active card to the right (show card on right side)
    newIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
  }

  setCurrentIndex(newIndex);
};




function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

const handleTouchMove = (_e: React.TouchEvent<HTMLUListElement>) => {
  // prevent scroll
  // _e.preventDefault();
};



const handleTouchStart = (e: React.TouchEvent<HTMLUListElement>) => {

    setTouchStartX(e.touches[0].clientX);
  };


const handleTouchEnd = (e: React.TouchEvent<HTMLUListElement>) => {

    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX!;
    const stepWidth = 150; // Change this depending on card width
    const steps = Math.floor(Math.abs(diff) / stepWidth);

    if (steps > 0) {
      const direction = diff > 0 ? 'right' : 'left';
      for (let i = 0; i < steps; i++) {
        moveCarousel(direction);
      }
    }


    setTouchStartX(null);
  };

// const isMobile = useIsMobile();
// console.log('Is mobile:', isMobile);


  return (
    <div className="relative gallery flex flex-col items-center justify-center">
      <ul
        className="cards relative w-[14rem] h-[20rem] flex items-center overflow-visible"
        style={{ perspective: 1000 }}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        {reviews.map((review, i) => (
          <li
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="w-[16rem] h-[20rem] rounded-lg bg-purple-500 text-white text-center flex flex-col items-center justify-center shadow-lg absolute top-0 left-0"
            style={{
              backgroundImage: `url(${CardBgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              fontSize: '1rem',
              padding: '1rem',
              lineHeight: 1.4,
              borderRadius: '0.8rem',
              cursor: 'default',
            }}
          >
            <div className="flex flex-col items-center justify-center h-full w-full">
              <p className="text-sm italic text-white mb-4 px-2">"{review.text}"</p>
              <div className="mt-2 font-semibold">{review.name}</div>
              <div className="text-sm text-blue-100 mb-1">{review.title}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 mx-0.5" />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Hide buttons on mobile */}
      <div className="mt-6 space-x-6 hidden md:flex">
        <button
          onClick={() => moveCarousel('left')}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-300"
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button
          onClick={() => moveCarousel('right')}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-300"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;



