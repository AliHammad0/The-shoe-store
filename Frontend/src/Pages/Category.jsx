
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Sneakers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMb_qXGUfy0fr7j_0GlZ7d2iH_OZrkmDnaSRGprbJpZA&s=10",
    link: "/category/sneakers",
    
  },
  {
    id: 2,
    title: "Sports Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GaUCLtYExtvkcafOs2NJx_IW31JRPE8zYJwDr7zlEQ&s=10",
    link: "/category/sports-shoes",
   
  },
  {
    id: 3,
    title: "Formal Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPcx-zQbeIjuPjS8iwGO-7HWIC_9I2gg3kSWMfCSZ4g&s=10",
    link: "/category/formal-shoes",
   
  },
  {
    id: 4,
    title: "Casual Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    link: "/category/casual-shoes",
    
  },
  {
    id: 5,
    title: "High-Tops",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    link: "/category/high-tops",
    
  },
  {
    id: 6,
    title: "Sandals & Slides",
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
    link: "/category/sandals-slides",
    
  },
];

export default function ShoesCategory() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToCategory = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll("[data-category-card]");

    cards[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setActiveSlide(index);
  };

  const moveSlider = (direction) => {
    scrollToCategory(
      Math.max(
        0,
        Math.min(categories.length - 1, activeSlide + direction)
      )
    );
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = [...slider.querySelectorAll("[data-category-card]")];
    if (!cards.length) return;

    const sliderLeft = slider.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - sliderLeft
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveSlide(closestIndex);
  };

  return (
    <main className="min-h-screen bg-[#faf9ff] px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-violet-600">
              Find Your Perfect Pair
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Shop By Category
              <span className="text-violet-600">.</span>
            </h1>
          </div>

          {/* Arrow Controls */}
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => moveSlider(-1)}
              disabled={activeSlide === 0}
              aria-label="Previous category"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition hover:border-violet-600 hover:bg-violet-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={23} strokeWidth={2.5} />
            </button>

            <button
              type="button"
              onClick={() => moveSlider(1)}
              disabled={activeSlide === categories.length - 1}
              aria-label="Next category"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition hover:border-violet-600 hover:bg-violet-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
            >
              <ChevronRight size={23} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Category Cards */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
        >
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              data-category-card
              className="group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[65%] md:w-full"
            >
              <div className="relative h-[320px] overflow-hidden sm:h-[370px] lg:h-[410px]">
                <img
                  src={category.image}
                  alt={category.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5" />

                {/* Category Number */}
                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/20 text-xs font-bold text-white backdrop-blur-sm">
                  0{category.id}
                </span>

                {/* Arrow Icon */}
                <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 transition duration-300 group-hover:rotate-45 group-hover:bg-violet-600 group-hover:text-white">
                  <ArrowUpRight size={23} strokeWidth={2.3} />
                </span>

                {/* Category Name Only */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  {/* <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                    <span>{category.icon}</span>
                    Shoe Collection
                  </span> */}

                  <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                    {category.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Slider Dots */}
        <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
          {categories.map((category, index) => (
            <button
              key={category.id}
              type="button"
              onClick={() => scrollToCategory(index)}
              aria-label={`Go to ${category.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-8 bg-violet-600"
                  : "w-2 bg-violet-200 hover:bg-violet-400"
              }`}
            />
          ))}
        </div>

        {/* Mobile Swipe Arrows */}
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-500 md:hidden">
          <ChevronLeft size={18} />
          <span>Swipe to see more</span>
          <ChevronRight size={18} />
        </div>
      </div>
    </main>
  );
}
