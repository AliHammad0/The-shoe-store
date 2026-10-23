import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    category: "Everyday Collection",
    price: 4500,
    oldPrice: 5500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpPggjpyrgUqmyPhL1LHVy_yPAaTKxBZPen2rif2g0w&s=10",
    color: "White / Red",
  },
  {
    id: 2,
    name: "Urban Street Sneakers",
    category: "Streetwear Collection",
    price: 5200,
    oldPrice: 6200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReS9HCQ4TPLQWaQDGgk1QNFt6oZ8DNbdw7dxjUZuJnsQ&s5",
    color: "Classic White",
  },
  {
    id: 3,
    name: "Essential Sport Shoes",
    category: "Sports Collection",
    price: 4800,
    oldPrice: 5800,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0Hx1EPJ2ORtMv-71dGHG4NG_kSvetATYzfIUfaOU9g&s=10",
    color: "White / Black",
  },
  {
    id: 4,
    name: "Premium Casual Sneakers",
    category: "Casual Collection",
    price: 5600,
    oldPrice: 6800,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodj5tU_U-EaEfSoTQsYo7UGnHyQKA7yfYRmVlxfny4Q&s=10",
    color: "Neutral White",
  },
  {
    id: 5,
    name: "Modern Everyday Shoes",
    category: "New Season",
    price: 4200,
    oldPrice: 5000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToXL9ABjL98H_LWrPpJ30S2AJlziA5XI1Yi-ps-js3MQ&s=10",
    color: "Street Style",
  },
];

const formatPrice = (price) =>
  `Rs. ${price.toLocaleString("en-PK")}`;

export default function Buy2Get1Free() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="border-b border-gray-200">
        <div className="mx-auto grid max-w-7xl items-center gap-7 px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-2 md:gap-10 md:py-12 lg:px-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              The Shoe Spot · Special Offer
            </p>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              BUY 2.
              <br />
              GET 1{" "}
              <span className="underline decoration-4 underline-offset-8">
                FREE.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              More pairs, more possibilities. Discover your favourite
              footwear styles in our exclusive promotional collection.
            </p>

            <a
              href="#offer-products"
              className="mt-6 inline-flex items-center justify-center border border-black bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              EXPLORE COLLECTION
              <span className="ml-3">→</span>
            </a>

            <p className="mt-3 text-xs text-gray-500">
              Promotional showcase · Terms and eligibility may apply.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90"
              alt="Featured sneaker from The Shoe Spot"
              className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[370px]"
            />

            {/* Compact Image Text */}
            <div className="absolute bottom-3 left-3 bg-white px-4 py-3 sm:bottom-4 sm:left-4">
              <p className="text-[10px] font-medium uppercase tracking-widest text-gray-500 sm:text-xs">
                Your next favourite pair
              </p>

              <p className="mt-1 text-base font-bold sm:text-lg">
                Made for your style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Collection */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="flex flex-col justify-between gap-3 border-b border-gray-200 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              A Little More for Less
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              The Promotional Collection
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-600">
            Explore five featured styles selected for your everyday
            wardrobe.
          </p>
        </div>

        {/* Five Products */}
        <div
          id="offer-products"
          className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-5"
        >
          {products.map((product) => (
            <article key={product.id} className="group min-w-0">
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[230px] lg:h-[240px]"
                />

                <span className="absolute left-2 top-2 bg-white px-2 py-1.5 text-[9px] font-bold uppercase tracking-wider sm:left-3 sm:top-3 sm:px-3 sm:text-[10px]">
                  Featured
                </span>
              </div>

              <div className="pt-3">
                <p className="text-[10px] text-gray-500 sm:text-xs">
                  {product.category}
                </p>

                <h3 className="mt-1.5 text-sm font-semibold leading-5 sm:text-base">
                  {product.name}
                </h3>

                <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                  {product.color}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold sm:text-base">
                    {formatPrice(product.price)}
                  </span>

                  <span className="text-xs text-gray-400 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Call To Action */}
      <section className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-7 sm:px-8 sm:py-8 md:flex-row md:items-center lg:px-12">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Ready to Find Your Next Pair?
            </h2>

            <p className="mt-1.5 text-sm text-gray-600">
              Explore the complete footwear collection.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center border border-black px-6 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
          >
            SHOP ALL SHOES
            <span className="ml-3">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}