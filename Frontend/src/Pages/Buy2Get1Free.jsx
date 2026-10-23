import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gift, Truck, Sparkles } from "lucide-react";

const Buy2Get1Free = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-12 md:py-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-200">
              <Sparkles size={16} />
              Special Shopping Event
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              The Shoe Spot Exclusive
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              BUY 2
              <span className="block text-amber-400">GET 1 FREE</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-300">
              Three pairs. Endless style. Discover your favourite shoes and
              enjoy an exclusive offer on your next style upgrade.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-amber-400 px-7 py-4 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-white"
              >
                Explore Collection
                <ArrowRight size={18} />
              </Link>

              <a
                href="#offer-details"
                className="inline-flex items-center border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
              >
                Discover Offer
              </a>
            </div>

            <p className="mt-5 text-xs text-gray-400">
              *Promotional offer announcement. Terms may apply.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85"
              alt="Featured sporty sneaker"
              className="relative z-10 h-[350px] w-full object-cover sm:h-[470px]"
            />

            <div className="absolute -bottom-5 -left-5 z-20 bg-amber-400 px-6 py-5 text-black shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest">
                More Style
              </p>
              <p className="text-2xl font-black">More Value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Introduction */}
      <section
        id="offer-details"
        className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
            A Deal Worth Stepping Into
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            THREE PAIRS.
            <span className="block text-gray-400">ONE AMAZING OFFER.</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-600">
            Refresh your footwear collection with styles made for every
            occasion. Find your next favourite look at The Shoe Spot.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-gray-100">
              <Gift size={24} />
            </div>
            <h3 className="text-xl font-bold">An Exclusive Offer</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Discover our Buy 2 Get 1 Free promotion and explore fresh styles
              for your wardrobe.
            </p>
          </div>

          <div className="border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-gray-100">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold">Find Your Style</h3>
            <p className="mt-3 leading-7 text-gray-600">
              From everyday sneakers to standout looks, discover footwear
              that matches your personality.
            </p>
          </div>

          <div className="border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center bg-gray-100">
              <Truck size={24} />
            </div>
            <h3 className="text-xl font-bold">Shop With Ease</h3>
            <p className="mt-3 leading-7 text-gray-600">
              Browse the collection, choose your favourites and enjoy a smooth
              shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call To Action */}
      <section className="bg-[#f5f3ef] px-6 py-16 text-center md:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
          Your Next Favourite Pair Awaits
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black sm:text-5xl">
          STEP UP YOUR SHOE GAME
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
          Explore The Shoe Spot collection and find the perfect pair for your
          next adventure.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-3 bg-black px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-amber-400 hover:text-black"
        >
          Shop All Shoes
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
};

export default Buy2Get1Free;