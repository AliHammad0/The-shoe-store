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
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
    color: "White / Red",
  },
  {
    id: 2,
    name: "Urban Street Sneakers",
    category: "Streetwear Collection",
    price: 5200,
    oldPrice: 6200,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=85",
    color: "Classic White",
  },
  {
    id: 3,
    name: "Essential Sport Shoes",
    category: "Sports Collection",
    price: 4800,
    oldPrice: 5800,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=85",
    color: "White / Black",
  },
  {
    id: 4,
    name: "Premium Casual Sneakers",
    category: "Casual Collection",
    price: 5600,
    oldPrice: 6800,
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=700&q=85",
    color: "Neutral White",
  },
  {
    id: 5,
    name: "Modern Everyday Shoes",
    category: "New Season",
    price: 4200,
    oldPrice: 5000,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=85",
    color: "Street Style",
  },
];

const formatPrice = (price) =>
  `Rs. ${price.toLocaleString("en-PK")}`;

export default function Buy2Get1Free() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="border-b border-gray-200">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:py-20 lg:px-12">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              The Shoe Spot · Special Offer
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              BUY 2.
              <br />
              GET 1 <span className="underline decoration-4 underline-offset-8">FREE.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
              More pairs, more possibilities. Discover your favourite
              footwear styles in our exclusive promotional collection.
            </p>

            <a
              href="#offer-products"
              className="mt-8 inline-flex items-center justify-center border border-black bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              EXPLORE COLLECTION <span className="ml-3">→</span>
            </a>

            <p className="mt-4 text-xs text-gray-500">
              Promotional showcase · Terms and eligibility may apply.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90"
              alt="Featured sneaker from The Shoe Spot"
              className="h-[320px] w-full object-cover sm:h-[440px]"
            />
            <div className="absolute bottom-4 left-4 bg-white px-5 py-4">
              <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Your next favourite pair
              </p>
              <p className="mt-1 text-lg font-bold">Made for your style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Details */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-4 border-b border-gray-200 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              A little more for less
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The Promotional Collection
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-600">
            Explore five featured styles selected for your everyday
            wardrobe.
          </p>
        </div>

        {/* Products */}
        <div
          id="offer-products"
          className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {products.map((product) => (
            <article key={product.id} className="group">
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-[270px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider">
                  Featured
                </span>
              </div>

              <div className="pt-4">
                <p className="text-xs text-gray-500">
                  {product.category}
                </p>

                <h3 className="mt-2 text-base font-semibold">
                  {product.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {product.color}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-base font-bold">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to find your next pair?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Explore the complete footwear collection.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center border border-black px-7 py-3.5 text-sm font-semibold transition hover:bg-black hover:text-white"
          >
            SHOP ALL SHOES <span className="ml-3">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}