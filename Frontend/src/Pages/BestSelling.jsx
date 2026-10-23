
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  Heart,
  SlidersHorizontal,
  X,
} from "lucide-react";

const productImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPcx-zQbeIjuPjS8iwGO-7HWIC_9I2gg3kSWMfCSZ4g&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLv00DtsML_LWGfAmEzliKeKK6gra_EJnACkfFKjaelg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzzv69AKjypghttxCw4giFW7_sR0PBOtvsHg4mOtiZQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ11y9f0jjxfM1FZVCq0wFLfTfkCmAak1GRz_QQnViRw&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0k8C5W6yVptOP0D63OP1GSAP8pYVPA8bPb_Gn5U8Og&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBbyDLO7Koe2zDm8D55Mtpay1MZQPqAf6XhYbeUJnKg&s=10",
];

const products = [
  { id: 1, name: "Air Motion Runner", category: "Sneakers", price: 12900, salePrice: 7900, color: "Cloud White", image: productImages[0], badge: "BESTSELLER" },
  { id: 2, name: "Urban Court Low", category: "Casual", price: 11500, salePrice: 6900, color: "Classic Red", image: productImages[1], badge: "SALE EDIT" },
  { id: 3, name: "Everyday Essential", category: "Sneakers", price: 9800, salePrice: 6400, color: "Off White", image: productImages[2] },
  { id: 4, name: "Retro Track 02", category: "Sports", price: 14500, salePrice: 8900, color: "White / Blue", image: productImages[3], badge: "LIMITED" },
  { id: 5, name: "Studio Street Low", category: "Casual", price: 10800, salePrice: 7200, color: "Sand", image: productImages[4] },
  { id: 6, name: "Velocity Runner", category: "Sports", price: 15900, salePrice: 9900, color: "Black", image: productImages[5], badge: "TOP PICK" },
  { id: 7, name: "Minimal Leather", category: "Premium", price: 17900, salePrice: 11900, color: "Ivory", image: productImages[0] },
  { id: 8, name: "Street Form High", category: "Sneakers", price: 14900, salePrice: 9500, color: "Black / White", image: productImages[3], badge: "SALE EDIT" },
  { id: 9, name: "Daily Move", category: "Casual", price: 8900, salePrice: 5900, color: "Grey", image: productImages[4] },
  { id: 10, name: "Court Classic", category: "Premium", price: 13500, salePrice: 8900, color: "White", image: productImages[1], badge: "POPULAR" },
  { id: 11, name: "Active Pace", category: "Sports", price: 12500, salePrice: 8200, color: "Black", image: productImages[5] },
  { id: 12, name: "Form One Essential", category: "Sneakers", price: 11900, salePrice: 7600, color: "Cream", image: productImages[2], badge: "SALE EDIT" },
];

const categories = ["All", "Sneakers", "Casual", "Sports", "Premium"];

const formatPrice = (price) => `Rs. ${price.toLocaleString("en-PK")}`;

const getDiscount = (product) =>
  Math.round(((product.price - product.salePrice) / product.price) * 100);

export default function BestSelling() {
  const sliderRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [wishlist, setWishlist] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);
  const [canGoLeft, setCanGoLeft] = useState(false);
  const [canGoRight, setCanGoRight] = useState(true);

  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (product) =>
        activeCategory === "All" || product.category === activeCategory
    );

    if (sortBy === "low") {
      result = [...result].sort((a, b) => a.salePrice - b.salePrice);
    } else if (sortBy === "high") {
      result = [...result].sort((a, b) => b.salePrice - a.salePrice);
    } else if (sortBy === "discount") {
      result = [...result].sort((a, b) => getDiscount(b) - getDiscount(a));
    }

    return result;
  }, [activeCategory, sortBy]);

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  const updateSliderButtons = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setCanGoLeft(slider.scrollLeft > 2);
    setCanGoRight(
      slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 2
    );
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollTo({ left: 0, behavior: "smooth" });
    const frame = requestAnimationFrame(updateSliderButtons);

    return () => cancelAnimationFrame(frame);
  }, [activeCategory, sortBy, showAll]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", updateSliderButtons, { passive: true });
    window.addEventListener("resize", updateSliderButtons);
    updateSliderButtons();

    return () => {
      slider.removeEventListener("scroll", updateSliderButtons);
      window.removeEventListener("resize", updateSliderButtons);
    };
  }, []);

  const slideProducts = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector("[data-product-card]");
    const gap = window.innerWidth >= 640 ? 20 : 12;
    const distance = card
      ? card.getBoundingClientRect().width + gap
      : slider.clientWidth / 2;

    slider.scrollBy({
      left: direction * distance * 2,
      behavior: "smooth",
    });
  };

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  return (
    <main className="overflow-hidden bg-white text-neutral-950">
      <section id="best-selling-products" className="scroll-mt-5">
        <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-8 sm:py-12 lg:px-14 lg:py-16">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-[10px]">
                THE SOLEORA SELECTION
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.045em] sm:mt-3 sm:text-5xl">
                Best sellers<span className="text-neutral-400">.</span>
              </h1>
              <p className="mt-2 text-xs text-neutral-500 sm:mt-3 sm:text-sm">
                The pairs everyone's stepping into.
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => slideProducts(-1)}
                disabled={!canGoLeft}
                aria-label="Previous products"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => slideProducts(1)}
                disabled={!canGoRight}
                aria-label="Next products"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 transition hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-b border-neutral-200 pb-4 sm:mt-8 sm:pb-5">
            <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setShowAll(false);
                  }}
                  className={`shrink-0 rounded-full border px-3 py-2 text-[10px] font-medium transition sm:px-5 sm:text-xs ${
                    activeCategory === category
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-950 hover:text-neutral-950"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileFilters((current) => !current)}
              aria-expanded={mobileFilters}
              className="flex shrink-0 items-center gap-1.5 text-[10px] font-medium sm:text-xs"
            >
              {mobileFilters ? <X size={15} /> : <SlidersHorizontal size={15} />}
              <span>Sort</span>
            </button>
          </div>

          {mobileFilters && (
            <div className="flex items-center justify-between gap-3 border-b border-neutral-200 py-4">
              <span className="text-xs text-neutral-500">Sort products</span>
              <div className="relative">
                <ArrowUpDown
                  size={14}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
                />
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="max-w-[190px] appearance-none border border-neutral-200 bg-white py-2 pl-9 pr-4 text-xs outline-none focus:border-neutral-950"
                >
                  <option value="featured">Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="discount">Biggest Discount</option>
                </select>
              </div>
            </div>
          )}

          <div className="mt-5 flex items-center justify-between text-[10px] text-neutral-500 sm:mt-7 sm:text-xs">
            <p>
              Showing {visibleProducts.length} of {filteredProducts.length} styles
            </p>
            <p className="hidden sm:block">Swipe to explore →</p>
          </div>

          <div
            ref={sliderRef}
            className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-4 sm:mt-5 sm:gap-5"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              overscrollBehaviorX: "contain",
            }}
          >
            {visibleProducts.map((product, index) => {
              const isWishlisted = wishlist.includes(product.id);

              return (
                <article
                  key={product.id}
                  data-product-card
                  className="w-[calc(50%-6px)] min-w-0 flex-none snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)]"
                >
                  <div className="group relative overflow-hidden bg-[#f4f3f0]">
                    <div className="relative aspect-[0.82/1] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading={index < 4 ? "eager" : "lazy"}
                        draggable="false"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                        onError={(event) => {
                          event.currentTarget.style.opacity = "0.35";
                        }}
                      />

                      <div className="absolute left-2 top-2 flex flex-col items-start gap-1 sm:left-3 sm:top-3">
                        {product.badge && (
                          <span className="bg-white px-2 py-1 text-[7px] font-semibold tracking-[0.12em] sm:px-2.5 sm:text-[9px]">
                            {product.badge}
                          </span>
                        )}
                        <span className="bg-neutral-950 px-2 py-1 text-[7px] font-medium text-white sm:px-2.5 sm:text-[9px]">
                          -{getDiscount(product)}%
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        aria-label={
                          isWishlisted
                            ? `Remove ${product.name} from wishlist`
                            : `Add ${product.name} to wishlist`
                        }
                        aria-pressed={isWishlisted}
                        className={`absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full transition sm:right-3 sm:top-3 sm:h-10 sm:w-10 ${
                          isWishlisted
                            ? "bg-neutral-950 text-white"
                            : "bg-white/90 text-neutral-950 hover:bg-neutral-950 hover:text-white"
                        }`}
                      >
                        <Heart
                          size={15}
                          fill={isWishlisted ? "currentColor" : "none"}
                        />
                      </button>

                      <div className="absolute inset-x-2 bottom-2 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-3 sm:bottom-3">
                        <button
                          type="button"
                          onClick={() =>
                            window.dispatchEvent(
                              new CustomEvent("soleora:product-selected", {
                                detail: product,
                              })
                            )
                          }
                          className="w-full bg-white/95 py-2.5 text-[9px] font-semibold uppercase tracking-[0.12em] transition hover:bg-neutral-950 hover:text-white sm:py-3 sm:text-[10px]"
                        >
                          Explore style
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-semibold tracking-tight sm:text-sm">
                          {product.name}
                        </p>
                        <p className="mt-1 truncate text-[10px] text-neutral-500 sm:text-xs">
                          {product.color}
                        </p>
                      </div>
                      <span className="shrink-0 pt-0.5 text-[9px] text-neutral-400 sm:text-[10px]">
                        {product.category}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 sm:mt-3">
                      <span className="text-[11px] font-semibold sm:text-sm">
                        {formatPrice(product.salePrice)}
                      </span>
                      <span className="text-[10px] text-neutral-400 line-through sm:text-xs">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {visibleProducts.length === 0 && (
            <p className="py-12 text-center text-sm text-neutral-500">
              Is category mein abhi koi product nahi hai.
            </p>
          )}

          <div className="mt-3 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => slideProducts(-1)}
              disabled={!canGoLeft}
              aria-label="Previous products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 disabled:opacity-30"
            >
              <ArrowLeft size={16} />
            </button>
            <span className="text-[9px] uppercase tracking-[0.18em] text-neutral-500">
              Swipe to discover
            </span>
            <button
              type="button"
              onClick={() => slideProducts(1)}
              disabled={!canGoRight}
              aria-label="Next products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 disabled:opacity-30"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {filteredProducts.length > 8 && (
            <div className="mt-8 text-center sm:mt-10">
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                className="inline-flex items-center gap-3 border border-neutral-950 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition hover:bg-neutral-950 hover:text-white sm:px-8 sm:py-4 sm:text-xs"
              >
                {showAll ? "Show less" : "View all styles"}
                {showAll ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
