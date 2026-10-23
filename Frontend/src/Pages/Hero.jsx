import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMIk4SQoYc9NcHv9opNJQIjfecD3n_rfWocjrXMiJVxQ&s=10",
    eyebrow: "THE NEW COLLECTION",
    title: "Find Your Everyday Style",
    subtitle: "Discover footwear designed for your everyday journey.",
    buttonText: "Shop Now",
    action: "products",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5-ZTQrLwLl-CX-UGLZn6Np5OOMI8Oy6fAyszIk2tsw&s=10",
    eyebrow: "MADE TO MOVE",
    title: "Style That Moves With You",
    subtitle: "Find your next favourite pair and step out with confidence.",
    buttonText: "Explore Collection",
    action: "products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "EXCLUSIVE SPECIAL OFFER",
    title: "Buy 2, Get 1 Free",
    subtitle:
      "Three pairs. One amazing deal. Discover our special footwear promotion.",
    buttonText: "Discover The Offer",
    action: "offer",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  const goToSlide = (index) => {
    setActive(index);
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById(
      "best-selling-products"
    );

    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/products");
    }
  };

  const handleSlideAction = (slide) => {
    if (slide.action === "offer") {
      navigate("/buy-2-get-1-free");
      return;
    }

    scrollToProducts();
  };

  return (
    <section
      aria-label="The Shoe Spot featured collection"
      className="w-full overflow-hidden bg-neutral-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[420px] w-full sm:h-[500px] lg:h-[620px]">
        {slides.map((slide, index) => {
          const isActive = active === index;

          return (
            <div
              key={slide.image}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

              <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center px-6 sm:px-12 lg:px-20">
                <div
                  className={`max-w-xl text-white transition-all duration-700 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                >
                  <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-white/85 sm:text-sm">
                    {slide.eyebrow}
                  </p>

                  <h1 className="max-w-lg text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  <p className="mt-5 max-w-md text-sm leading-6 text-white/90 sm:text-base sm:leading-7">
                    {slide.subtitle}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleSlideAction(slide)}
                    className="mt-7 inline-flex items-center justify-center bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div
          className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2"
          aria-label="Choose banner slide"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                active === index
                  ? "w-9 bg-white"
                  : "w-4 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}